import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReportPlaybackProgressRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  playbackProgressInfo?: shared.PlaybackProgressInfoInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  playbackProgressInfo1?: shared.PlaybackProgressInfoInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  playbackProgressInfo2?: shared.PlaybackProgressInfoInput;
}


export class ReportPlaybackProgressSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class ReportPlaybackProgressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: ReportPlaybackProgressRequestsInput;

  @SpeakeasyMetadata()
  security: ReportPlaybackProgressSecurity;
}


export class ReportPlaybackProgressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
