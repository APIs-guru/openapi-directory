import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateLicenseTemplatePathParams extends SpeakeasyBase {
    licenseTemplateNumber: string;
}
export declare class UpdateLicenseTemplateRequestBody extends SpeakeasyBase {
    active?: boolean;
    automatic?: boolean;
    currency?: string;
    hidden?: boolean;
    hideLicenses?: boolean;
    licenseType?: string;
    maxSessions?: string;
    name?: string;
    number?: string;
    price?: number;
    quantity?: string;
    quota?: string;
    timeVolume?: string;
    timeVolumePeriod?: string;
}
export declare class UpdateLicenseTemplateSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class UpdateLicenseTemplateRequest extends SpeakeasyBase {
    pathParams: UpdateLicenseTemplatePathParams;
    request?: UpdateLicenseTemplateRequestBody;
    security: UpdateLicenseTemplateSecurity;
}
export declare class UpdateLicenseTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
