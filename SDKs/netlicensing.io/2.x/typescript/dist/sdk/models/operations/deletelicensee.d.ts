import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteLicenseePathParams extends SpeakeasyBase {
    licenseeNumber: string;
}
export declare class DeleteLicenseeQueryParams extends SpeakeasyBase {
    forceCascade?: boolean;
}
export declare class DeleteLicenseeSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class DeleteLicenseeRequest extends SpeakeasyBase {
    pathParams: DeleteLicenseePathParams;
    queryParams: DeleteLicenseeQueryParams;
    security: DeleteLicenseeSecurity;
}
export declare class DeleteLicenseeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
