import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateLicenseRequestBody extends SpeakeasyBase {
    active: boolean;
    currency?: string;
    hidden?: boolean;
    licenseTemplateNumber: string;
    licenseeNumber: string;
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
export declare class CreateLicenseSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class CreateLicenseRequest extends SpeakeasyBase {
    request: CreateLicenseRequestBody;
    security: CreateLicenseSecurity;
}
export declare class CreateLicenseResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
