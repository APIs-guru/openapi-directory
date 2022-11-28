import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportPlaybackStartRequestsInput extends SpeakeasyBase {
    playbackStartInfo?: shared.PlaybackStartInfoInput;
    playbackStartInfo1?: shared.PlaybackStartInfoInput;
    playbackStartInfo2?: shared.PlaybackStartInfoInput;
}
export declare class ReportPlaybackStartSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class ReportPlaybackStartRequest extends SpeakeasyBase {
    request?: ReportPlaybackStartRequestsInput;
    security: ReportPlaybackStartSecurity;
}
export declare class ReportPlaybackStartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
