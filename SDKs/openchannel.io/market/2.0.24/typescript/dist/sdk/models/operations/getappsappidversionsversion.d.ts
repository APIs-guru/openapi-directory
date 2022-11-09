import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetAppsAppIdVersionsVersionPathParams extends SpeakeasyBase {
    appId: string;
    version: number;
}
export declare class GetAppsAppIdVersionsVersionQueryParams extends SpeakeasyBase {
    developerId?: string;
}
export declare class GetAppsAppIdVersionsVersionRequest extends SpeakeasyBase {
    pathParams: GetAppsAppIdVersionsVersionPathParams;
    queryParams: GetAppsAppIdVersionsVersionQueryParams;
}
export declare class GetAppsAppIdVersionsVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
