import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoPathParams extends SpeakeasyBase {
    architectureName: string;
    projectName: string;
    repositoryName: string;
}
export declare enum GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoViewEnum {
    Pkgnames = "pkgnames",
    Revpkgnames = "revpkgnames",
    Order = "order"
}
export declare class GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryParams extends SpeakeasyBase {
    package?: string;
    view?: GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoViewEnum;
}
export declare class GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoRequest extends SpeakeasyBase {
    pathParams: GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoPathParams;
    queryParams: GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryParams;
    security: GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoSecurity;
}
export declare class GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
