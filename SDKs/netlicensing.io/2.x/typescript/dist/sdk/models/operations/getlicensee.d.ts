import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetLicenseePathParams extends SpeakeasyBase {
    licenseeNumber: string;
}
export declare class GetLicenseeSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetLicenseeRequest extends SpeakeasyBase {
    pathParams: GetLicenseePathParams;
    security: GetLicenseeSecurity;
}
export declare class GetLicenseeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
