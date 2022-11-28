import { SpeakeasyBase } from "../../../internal/utils";
export declare class LicensesReadPathParams extends SpeakeasyBase {
    licenseId: string;
}
export declare class LicensesReadRequest extends SpeakeasyBase {
    pathParams: LicensesReadPathParams;
}
export declare class LicensesReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
