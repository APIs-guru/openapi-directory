import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportPlaybackProgressRequestsInput extends SpeakeasyBase {
    playbackProgressInfo?: shared.PlaybackProgressInfoInput;
    playbackProgressInfo1?: shared.PlaybackProgressInfoInput;
    playbackProgressInfo2?: shared.PlaybackProgressInfoInput;
}
export declare class ReportPlaybackProgressSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class ReportPlaybackProgressRequest extends SpeakeasyBase {
    request?: ReportPlaybackProgressRequestsInput;
    security: ReportPlaybackProgressSecurity;
}
export declare class ReportPlaybackProgressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
