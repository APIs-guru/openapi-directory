import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBuildProjectRepositoryArchPackageLogPathParams extends SpeakeasyBase {
    architectureName: string;
    packageName: string;
    projectName: string;
    repositoryName: string;
}
export declare class GetBuildProjectRepositoryArchPackageLogSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetBuildProjectRepositoryArchPackageLogRequest extends SpeakeasyBase {
    pathParams: GetBuildProjectRepositoryArchPackageLogPathParams;
    security: GetBuildProjectRepositoryArchPackageLogSecurity;
}
export declare class GetBuildProjectRepositoryArchPackageLogResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
