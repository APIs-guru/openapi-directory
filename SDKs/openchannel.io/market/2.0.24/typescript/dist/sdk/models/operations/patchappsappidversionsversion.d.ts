import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PatchAppsAppIdVersionsVersionPathParams extends SpeakeasyBase {
    appId: string;
    version: string;
}
export declare class PatchAppsAppIdVersionsVersionQueryParams extends SpeakeasyBase {
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
export declare class PatchAppsAppIdVersionsVersionRequest extends SpeakeasyBase {
    pathParams: PatchAppsAppIdVersionsVersionPathParams;
    queryParams: PatchAppsAppIdVersionsVersionQueryParams;
}
export declare class PatchAppsAppIdVersionsVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
