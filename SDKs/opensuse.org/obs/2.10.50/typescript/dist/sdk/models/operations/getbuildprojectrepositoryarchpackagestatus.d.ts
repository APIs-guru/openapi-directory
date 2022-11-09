import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBuildProjectRepositoryArchPackageStatusPathParams extends SpeakeasyBase {
    architectureName: string;
    packageName: string;
    projectName: string;
    repositoryName: string;
}
export declare class GetBuildProjectRepositoryArchPackageStatusSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetBuildProjectRepositoryArchPackageStatusRequest extends SpeakeasyBase {
    pathParams: GetBuildProjectRepositoryArchPackageStatusPathParams;
    security: GetBuildProjectRepositoryArchPackageStatusSecurity;
}
export declare class GetBuildProjectRepositoryArchPackageStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
