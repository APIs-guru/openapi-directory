import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReportPlaybackStartRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  playbackStartInfo?: shared.PlaybackStartInfo;

  @Metadata({ data: "request, media_type=application/json" })
  playbackStartInfo1?: shared.PlaybackStartInfo;

  @Metadata({ data: "request, media_type=text/json" })
  playbackStartInfo2?: shared.PlaybackStartInfo;
}


export class ReportPlaybackStartSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class ReportPlaybackStartRequest extends SpeakeasyBase {
  @Metadata()
  request?: ReportPlaybackStartRequests;

  @Metadata()
  security: ReportPlaybackStartSecurity;
}


export class ReportPlaybackStartResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
