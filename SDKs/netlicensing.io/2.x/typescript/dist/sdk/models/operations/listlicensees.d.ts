import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListLicenseesSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class ListLicenseesRequest extends SpeakeasyBase {
    security: ListLicenseesSecurity;
}
export declare class ListLicenseesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensings?: any[];
}
