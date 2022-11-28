import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBuildProjectNameResultPathParams extends SpeakeasyBase {
    projectName: string;
}
export declare enum GetBuildProjectNameResultViewEnum {
    Summary = "summary",
    Status = "status",
    Binarylist = "binarylist"
}
export declare class GetBuildProjectNameResultQueryParams extends SpeakeasyBase {
    arch?: string;
    lastbuild?: boolean;
    locallink?: boolean;
    multibuild?: boolean;
    package?: string;
    repository?: string;
    view?: GetBuildProjectNameResultViewEnum;
}
export declare class GetBuildProjectNameResultSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetBuildProjectNameResultRequest extends SpeakeasyBase {
    pathParams: GetBuildProjectNameResultPathParams;
    queryParams: GetBuildProjectNameResultQueryParams;
    security: GetBuildProjectNameResultSecurity;
}
export declare class GetBuildProjectNameResultResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
