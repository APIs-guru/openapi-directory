import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ValidateLicenseePathParams extends SpeakeasyBase {
    licenseeNumber: string;
}
export declare enum ValidateLicenseeRequestBodyActionEnum {
    CheckOut = "checkOut",
    CheckIn = "checkIn"
}
export declare class ValidateLicenseeRequestBody extends SpeakeasyBase {
    action?: ValidateLicenseeRequestBodyActionEnum;
    licenseeName?: string;
    nodeSecret?: string;
    productModuleNumber?: string;
    productNumber?: string;
    sessionId?: string;
}
export declare class ValidateLicenseeSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class ValidateLicenseeRequest extends SpeakeasyBase {
    pathParams: ValidateLicenseePathParams;
    request?: ValidateLicenseeRequestBody;
    security: ValidateLicenseeSecurity;
}
export declare class ValidateLicenseeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
