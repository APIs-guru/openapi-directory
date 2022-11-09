import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetLicenseTemplatePathParams extends SpeakeasyBase {
    licenseTemplateNumber: string;
}
export declare class GetLicenseTemplateSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetLicenseTemplateRequest extends SpeakeasyBase {
    pathParams: GetLicenseTemplatePathParams;
    security: GetLicenseTemplateSecurity;
}
export declare class GetLicenseTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
