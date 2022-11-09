import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBuildProjectNameRepositoryNameArchitectureNamePackageNamePathParams extends SpeakeasyBase {
    architectureName: string;
    packageName: string;
    projectName: string;
    repositoryName: string;
}
export declare class GetBuildProjectNameRepositoryNameArchitectureNamePackageNameSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetBuildProjectNameRepositoryNameArchitectureNamePackageNameRequest extends SpeakeasyBase {
    pathParams: GetBuildProjectNameRepositoryNameArchitectureNamePackageNamePathParams;
    security: GetBuildProjectNameRepositoryNameArchitectureNamePackageNameSecurity;
}
export declare class GetBuildProjectNameRepositoryNameArchitectureNamePackageNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
