import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBuildProjectNameRepositoryNameArchitectureNameRepositoryPathParams extends SpeakeasyBase {
    architectureName: string;
    projectName: string;
    repositoryName: string;
}
export declare class GetBuildProjectNameRepositoryNameArchitectureNameRepositorySecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetBuildProjectNameRepositoryNameArchitectureNameRepositoryRequest extends SpeakeasyBase {
    pathParams: GetBuildProjectNameRepositoryNameArchitectureNameRepositoryPathParams;
    security: GetBuildProjectNameRepositoryNameArchitectureNameRepositorySecurity;
}
export declare class GetBuildProjectNameRepositoryNameArchitectureNameRepositoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
