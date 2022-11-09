import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostPermissionAppsAppIdPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class PostPermissionAppsAppIdQueryParams extends SpeakeasyBase {
    date?: number;
    ip?: string;
    userId: string;
}
export declare class PostPermissionAppsAppIdRequest extends SpeakeasyBase {
    pathParams: PostPermissionAppsAppIdPathParams;
    queryParams: PostPermissionAppsAppIdQueryParams;
}
export declare class PostPermissionAppsAppIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
