import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteAppsAppIdVersionsVersionPathParams extends SpeakeasyBase {
    appId: string;
    version: string;
}
export declare class DeleteAppsAppIdVersionsVersionQueryParams extends SpeakeasyBase {
    developerId: string;
}
export declare class DeleteAppsAppIdVersionsVersionRequest extends SpeakeasyBase {
    pathParams: DeleteAppsAppIdVersionsVersionPathParams;
    queryParams: DeleteAppsAppIdVersionsVersionQueryParams;
}
export declare class DeleteAppsAppIdVersionsVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
