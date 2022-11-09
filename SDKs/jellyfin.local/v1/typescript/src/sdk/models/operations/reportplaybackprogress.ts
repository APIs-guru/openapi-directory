import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReportPlaybackProgressRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  playbackProgressInfo?: shared.PlaybackProgressInfo;

  @Metadata({ data: "request, media_type=application/json" })
  playbackProgressInfo1?: shared.PlaybackProgressInfo;

  @Metadata({ data: "request, media_type=text/json" })
  playbackProgressInfo2?: shared.PlaybackProgressInfo;
}


export class ReportPlaybackProgressSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class ReportPlaybackProgressRequest extends SpeakeasyBase {
  @Metadata()
  request?: ReportPlaybackProgressRequests;

  @Metadata()
  security: ReportPlaybackProgressSecurity;
}


export class ReportPlaybackProgressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
