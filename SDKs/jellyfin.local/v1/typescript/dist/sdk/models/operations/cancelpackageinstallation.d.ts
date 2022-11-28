import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelPackageInstallationPathParams extends SpeakeasyBase {
    packageId: string;
}
export declare class CancelPackageInstallationSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class CancelPackageInstallationRequest extends SpeakeasyBase {
    pathParams: CancelPackageInstallationPathParams;
    security: CancelPackageInstallationSecurity;
}
export declare class CancelPackageInstallationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
