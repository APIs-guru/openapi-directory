import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateLicenseTemplateRequestBody extends SpeakeasyBase {
    active: boolean;
    automatic?: boolean;
    currency?: string;
    hidden?: boolean;
    hideLicenses?: boolean;
    licenseType: string;
    maxSessions?: string;
    name: string;
    number?: string;
    price?: number;
    productModuleNumber: string;
    quantity?: string;
    quota?: string;
    timeVolume?: string;
    timeVolumePeriod?: string;
}
export declare class CreateLicenseTemplateSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class CreateLicenseTemplateRequest extends SpeakeasyBase {
    request: CreateLicenseTemplateRequestBody;
    security: CreateLicenseTemplateSecurity;
}
export declare class CreateLicenseTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
