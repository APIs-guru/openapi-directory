import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoPathParams extends SpeakeasyBase {
    architectureName: string;
    fileName: string;
    packageName: string;
    projectName: string;
    repositoryName: string;
}
export declare enum GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoViewEnum {
    Fileinfo = "fileinfo",
    FileinfoExt = "fileinfo_ext"
}
export declare class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoQueryParams extends SpeakeasyBase {
    view: GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoViewEnum[];
}
export declare class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoRequest extends SpeakeasyBase {
    pathParams: GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoPathParams;
    queryParams: GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoQueryParams;
    security: GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoSecurity;
}
export declare class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
