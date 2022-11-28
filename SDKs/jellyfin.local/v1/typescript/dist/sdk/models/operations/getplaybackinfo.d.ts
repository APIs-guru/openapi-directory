import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPlaybackInfoPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetPlaybackInfoQueryParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetPlaybackInfoSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetPlaybackInfoRequest extends SpeakeasyBase {
    pathParams: GetPlaybackInfoPathParams;
    queryParams: GetPlaybackInfoQueryParams;
    security: GetPlaybackInfoSecurity;
}
export declare class GetPlaybackInfoResponse extends SpeakeasyBase {
    contentType: string;
    playbackInfoResponse?: shared.PlaybackInfoResponse;
    statusCode: number;
}
