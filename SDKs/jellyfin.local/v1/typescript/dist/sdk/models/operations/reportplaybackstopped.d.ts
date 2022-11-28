import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportPlaybackStoppedRequestsInput extends SpeakeasyBase {
    playbackStopInfo?: shared.PlaybackStopInfoInput;
    playbackStopInfo1?: shared.PlaybackStopInfoInput;
    playbackStopInfo2?: shared.PlaybackStopInfoInput;
}
export declare class ReportPlaybackStoppedSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class ReportPlaybackStoppedRequest extends SpeakeasyBase {
    request?: ReportPlaybackStoppedRequestsInput;
    security: ReportPlaybackStoppedSecurity;
}
export declare class ReportPlaybackStoppedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
