import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPackageInfoPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GetPackageInfoQueryParams extends SpeakeasyBase {
    assemblyGuid?: string;
}
export declare class GetPackageInfoSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetPackageInfoRequest extends SpeakeasyBase {
    pathParams: GetPackageInfoPathParams;
    queryParams: GetPackageInfoQueryParams;
    security: GetPackageInfoSecurity;
}
export declare class GetPackageInfoResponse extends SpeakeasyBase {
    contentType: string;
    packageInfo?: shared.PackageInfo;
    statusCode: number;
}
