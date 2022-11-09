import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetAppsBySafeNameSafeNamePathParams extends SpeakeasyBase {
    safeName: string;
}
export declare class GetAppsBySafeNameSafeNameQueryParams extends SpeakeasyBase {
    trackViews?: boolean;
    userId?: string;
}
export declare class GetAppsBySafeNameSafeNameRequest extends SpeakeasyBase {
    pathParams: GetAppsBySafeNameSafeNamePathParams;
    queryParams: GetAppsBySafeNameSafeNameQueryParams;
}
export declare class GetAppsBySafeNameSafeNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
