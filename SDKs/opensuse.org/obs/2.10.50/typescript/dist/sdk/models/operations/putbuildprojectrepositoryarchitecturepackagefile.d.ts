import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutBuildProjectRepositoryArchitecturePackageFilePackageNameEnum {
    Repository = "_repository"
}
export declare class PutBuildProjectRepositoryArchitecturePackageFilePathParams extends SpeakeasyBase {
    architectureName: string;
    fileName: string;
    packageName: PutBuildProjectRepositoryArchitecturePackageFilePackageNameEnum[];
    projectName: string;
    repositoryName: string;
}
export declare class PutBuildProjectRepositoryArchitecturePackageFileSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class PutBuildProjectRepositoryArchitecturePackageFileRequest extends SpeakeasyBase {
    pathParams: PutBuildProjectRepositoryArchitecturePackageFilePathParams;
    request?: string;
    security: PutBuildProjectRepositoryArchitecturePackageFileSecurity;
}
export declare class PutBuildProjectRepositoryArchitecturePackageFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
