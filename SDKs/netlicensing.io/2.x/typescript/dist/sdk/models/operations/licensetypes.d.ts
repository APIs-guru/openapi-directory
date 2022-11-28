import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LicenseTypesSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class LicenseTypesRequest extends SpeakeasyBase {
    security: LicenseTypesSecurity;
}
export declare class LicenseTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
