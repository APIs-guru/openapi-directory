import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBuildProjectRepositoryArchitecturePackageFilePathParams extends SpeakeasyBase {
    architectureName: string;
    fileName: string;
    packageName: string;
    projectName: string;
    repositoryName: string;
}
export declare class GetBuildProjectRepositoryArchitecturePackageFileSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetBuildProjectRepositoryArchitecturePackageFileRequest extends SpeakeasyBase {
    pathParams: GetBuildProjectRepositoryArchitecturePackageFilePathParams;
    security: GetBuildProjectRepositoryArchitecturePackageFileSecurity;
}
export declare class GetBuildProjectRepositoryArchitecturePackageFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getBuildProjectRepositoryArchitecturePackageFile200ApplicationWildcardBinaryString?: Uint8Array;
}
