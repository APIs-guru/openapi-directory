import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OnPlaybackStoppedPathParams extends SpeakeasyBase {
    itemId: string;
    userId: string;
}
export declare class OnPlaybackStoppedQueryParams extends SpeakeasyBase {
    liveStreamId?: string;
    mediaSourceId?: string;
    nextMediaType?: string;
    playSessionId?: string;
    positionTicks?: number;
}
export declare class OnPlaybackStoppedSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class OnPlaybackStoppedRequest extends SpeakeasyBase {
    pathParams: OnPlaybackStoppedPathParams;
    queryParams: OnPlaybackStoppedQueryParams;
    security: OnPlaybackStoppedSecurity;
}
export declare class OnPlaybackStoppedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
