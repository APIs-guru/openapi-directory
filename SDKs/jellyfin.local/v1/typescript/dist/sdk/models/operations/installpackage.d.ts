import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InstallPackagePathParams extends SpeakeasyBase {
    name: string;
}
export declare class InstallPackageQueryParams extends SpeakeasyBase {
    assemblyGuid?: string;
    repositoryUrl?: string;
    version?: string;
}
export declare class InstallPackageSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class InstallPackageRequest extends SpeakeasyBase {
    pathParams: InstallPackagePathParams;
    queryParams: InstallPackageQueryParams;
    security: InstallPackageSecurity;
}
export declare class InstallPackageResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
