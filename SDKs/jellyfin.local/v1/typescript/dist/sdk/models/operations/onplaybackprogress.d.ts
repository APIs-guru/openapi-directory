import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OnPlaybackProgressPathParams extends SpeakeasyBase {
    itemId: string;
    userId: string;
}
export declare class OnPlaybackProgressQueryParams extends SpeakeasyBase {
    audioStreamIndex?: number;
    isMuted?: boolean;
    isPaused?: boolean;
    liveStreamId?: string;
    mediaSourceId?: string;
    playMethod?: shared.PlayMethodEnum;
    playSessionId?: string;
    positionTicks?: number;
    repeatMode?: shared.RepeatModeEnum;
    subtitleStreamIndex?: number;
    volumeLevel?: number;
}
export declare class OnPlaybackProgressSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class OnPlaybackProgressRequest extends SpeakeasyBase {
    pathParams: OnPlaybackProgressPathParams;
    queryParams: OnPlaybackProgressQueryParams;
    security: OnPlaybackProgressSecurity;
}
export declare class OnPlaybackProgressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
