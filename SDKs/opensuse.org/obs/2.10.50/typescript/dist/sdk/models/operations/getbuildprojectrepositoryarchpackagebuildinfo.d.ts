import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBuildProjectRepositoryArchPackageBuildinfoPathParams extends SpeakeasyBase {
    architectureName: string;
    packageName: string;
    projectName: string;
    repositoryName: string;
}
export declare class GetBuildProjectRepositoryArchPackageBuildinfoSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetBuildProjectRepositoryArchPackageBuildinfoRequest extends SpeakeasyBase {
    pathParams: GetBuildProjectRepositoryArchPackageBuildinfoPathParams;
    security: GetBuildProjectRepositoryArchPackageBuildinfoSecurity;
}
export declare class GetBuildProjectRepositoryArchPackageBuildinfoResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
