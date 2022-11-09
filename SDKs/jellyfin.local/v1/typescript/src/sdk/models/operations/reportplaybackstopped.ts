import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReportPlaybackStoppedRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  playbackStopInfo?: shared.PlaybackStopInfo;

  @Metadata({ data: "request, media_type=application/json" })
  playbackStopInfo1?: shared.PlaybackStopInfo;

  @Metadata({ data: "request, media_type=text/json" })
  playbackStopInfo2?: shared.PlaybackStopInfo;
}


export class ReportPlaybackStoppedSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class ReportPlaybackStoppedRequest extends SpeakeasyBase {
  @Metadata()
  request?: ReportPlaybackStoppedRequests;

  @Metadata()
  security: ReportPlaybackStoppedSecurity;
}


export class ReportPlaybackStoppedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
