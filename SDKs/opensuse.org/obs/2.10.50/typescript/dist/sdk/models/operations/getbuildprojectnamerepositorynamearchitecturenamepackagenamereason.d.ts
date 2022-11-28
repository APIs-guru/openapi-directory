import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonPathParams extends SpeakeasyBase {
    architectureName: string;
    packageName: string;
    projectName: string;
    repositoryName: string;
}
export declare class GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonRequest extends SpeakeasyBase {
    pathParams: GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonPathParams;
    security: GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonSecurity;
}
export declare class GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
