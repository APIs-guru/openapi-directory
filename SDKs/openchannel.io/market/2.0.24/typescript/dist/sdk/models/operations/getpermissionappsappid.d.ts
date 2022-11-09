import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetPermissionAppsAppIdPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class GetPermissionAppsAppIdQueryParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetPermissionAppsAppIdRequest extends SpeakeasyBase {
    pathParams: GetPermissionAppsAppIdPathParams;
    queryParams: GetPermissionAppsAppIdQueryParams;
}
export declare class GetPermissionAppsAppIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
