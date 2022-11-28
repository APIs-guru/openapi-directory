import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteLicensePathParams extends SpeakeasyBase {
    licenseNumber: string;
}
export declare class DeleteLicenseSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class DeleteLicenseRequest extends SpeakeasyBase {
    pathParams: DeleteLicensePathParams;
    security: DeleteLicenseSecurity;
}
export declare class DeleteLicenseResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
