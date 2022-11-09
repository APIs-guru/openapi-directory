import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetLicensePathParams extends SpeakeasyBase {
    licenseNumber: string;
}
export declare class GetLicenseSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetLicenseRequest extends SpeakeasyBase {
    pathParams: GetLicensePathParams;
    security: GetLicenseSecurity;
}
export declare class GetLicenseResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
