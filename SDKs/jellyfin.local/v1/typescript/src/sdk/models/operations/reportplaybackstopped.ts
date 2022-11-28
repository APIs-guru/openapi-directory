import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReportPlaybackStoppedRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  playbackStopInfo?: shared.PlaybackStopInfoInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  playbackStopInfo1?: shared.PlaybackStopInfoInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  playbackStopInfo2?: shared.PlaybackStopInfoInput;
}


export class ReportPlaybackStoppedSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class ReportPlaybackStoppedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: ReportPlaybackStoppedRequestsInput;

  @SpeakeasyMetadata()
  security: ReportPlaybackStoppedSecurity;
}


export class ReportPlaybackStoppedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
