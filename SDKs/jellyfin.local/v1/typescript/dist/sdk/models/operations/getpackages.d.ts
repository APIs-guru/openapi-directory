import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPackagesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetPackagesRequest extends SpeakeasyBase {
    security: GetPackagesSecurity;
}
export declare class GetPackagesResponse extends SpeakeasyBase {
    contentType: string;
    packageInfos?: shared.PackageInfo[];
    statusCode: number;
}
