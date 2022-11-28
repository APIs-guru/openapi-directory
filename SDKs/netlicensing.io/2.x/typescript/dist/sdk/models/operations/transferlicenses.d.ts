import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TransferLicensesPathParams extends SpeakeasyBase {
    licenseeNumber: string;
}
export declare class TransferLicensesRequestBody extends SpeakeasyBase {
    sourceLicenseeNumber: string;
}
export declare class TransferLicensesSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class TransferLicensesRequest extends SpeakeasyBase {
    pathParams: TransferLicensesPathParams;
    request: TransferLicensesRequestBody;
    security: TransferLicensesSecurity;
}
export declare class TransferLicensesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
