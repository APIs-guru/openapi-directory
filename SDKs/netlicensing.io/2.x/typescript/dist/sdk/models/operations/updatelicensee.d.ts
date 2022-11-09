import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateLicenseePathParams extends SpeakeasyBase {
    licenseeNumber: string;
}
export declare class UpdateLicenseeRequestBody extends SpeakeasyBase {
    active?: boolean;
    markedForTransfer?: boolean;
    name?: string;
    number?: string;
}
export declare class UpdateLicenseeSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class UpdateLicenseeRequest extends SpeakeasyBase {
    pathParams: UpdateLicenseePathParams;
    request?: UpdateLicenseeRequestBody;
    security: UpdateLicenseeSecurity;
}
export declare class UpdateLicenseeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
