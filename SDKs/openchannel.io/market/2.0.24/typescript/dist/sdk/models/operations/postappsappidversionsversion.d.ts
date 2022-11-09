import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostAppsAppIdVersionsVersionPathParams extends SpeakeasyBase {
    appId: string;
    version: string;
}
export declare class PostAppsAppIdVersionsVersionQueryParams extends SpeakeasyBase {
    access?: string;
    allow?: string;
    approvalRequired?: string;
    attributes?: string;
    customData?: string;
    developerId: string;
    model?: string;
    name?: string;
    restrict?: string;
    type?: string;
}
export declare class PostAppsAppIdVersionsVersionRequest extends SpeakeasyBase {
    pathParams: PostAppsAppIdVersionsVersionPathParams;
    queryParams: PostAppsAppIdVersionsVersionQueryParams;
}
export declare class PostAppsAppIdVersionsVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
