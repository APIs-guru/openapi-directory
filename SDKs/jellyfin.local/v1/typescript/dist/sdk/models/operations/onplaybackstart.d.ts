import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OnPlaybackStartPathParams extends SpeakeasyBase {
    itemId: string;
    userId: string;
}
export declare class OnPlaybackStartQueryParams extends SpeakeasyBase {
    audioStreamIndex?: number;
    canSeek?: boolean;
    liveStreamId?: string;
    mediaSourceId?: string;
    playMethod?: shared.PlayMethodEnum;
    playSessionId?: string;
    subtitleStreamIndex?: number;
}
export declare class OnPlaybackStartSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class OnPlaybackStartRequest extends SpeakeasyBase {
    pathParams: OnPlaybackStartPathParams;
    queryParams: OnPlaybackStartQueryParams;
    security: OnPlaybackStartSecurity;
}
export declare class OnPlaybackStartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
