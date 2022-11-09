import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateLicenseeRequestBody extends SpeakeasyBase {
    active: boolean;
    markedForTransfer?: boolean;
    name?: string;
    number?: string;
    productNumber: string;
}
export declare class CreateLicenseeSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class CreateLicenseeRequest extends SpeakeasyBase {
    request?: CreateLicenseeRequestBody;
    security: CreateLicenseeSecurity;
}
export declare class CreateLicenseeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
