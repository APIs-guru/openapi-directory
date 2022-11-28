import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAppsAppIdPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class GetAppsAppIdQueryParams extends SpeakeasyBase {
    trackViews?: boolean;
    userId?: string;
}
export declare class GetAppsAppIdRequest extends SpeakeasyBase {
    pathParams: GetAppsAppIdPathParams;
    queryParams: GetAppsAppIdQueryParams;
}
export declare class GetAppsAppIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
