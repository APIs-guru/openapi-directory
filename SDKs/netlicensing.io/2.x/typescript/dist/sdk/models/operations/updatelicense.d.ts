import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateLicensePathParams extends SpeakeasyBase {
    licenseNumber: string;
}
export declare class UpdateLicenseRequestBody extends SpeakeasyBase {
    active?: boolean;
    currency?: string;
    hidden?: boolean;
    name?: string;
    number?: string;
    parentfeature?: string;
    price?: number;
    quantity?: string;
    startDate?: Date;
    timeVolume?: string;
    timeVolumePeriod?: string;
    usedQuantity?: string;
}
export declare class UpdateLicenseSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class UpdateLicenseRequest extends SpeakeasyBase {
    pathParams: UpdateLicensePathParams;
    request?: UpdateLicenseRequestBody;
    security: UpdateLicenseSecurity;
}
export declare class UpdateLicenseResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
