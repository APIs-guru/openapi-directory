import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReportPlaybackStartRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  playbackStartInfo?: shared.PlaybackStartInfoInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  playbackStartInfo1?: shared.PlaybackStartInfoInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  playbackStartInfo2?: shared.PlaybackStartInfoInput;
}


export class ReportPlaybackStartSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class ReportPlaybackStartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: ReportPlaybackStartRequestsInput;

  @SpeakeasyMetadata()
  security: ReportPlaybackStartSecurity;
}


export class ReportPlaybackStartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
