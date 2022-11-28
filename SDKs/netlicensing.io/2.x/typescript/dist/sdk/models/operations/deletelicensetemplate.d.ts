import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteLicenseTemplatePathParams extends SpeakeasyBase {
    licenseTemplateNumber: string;
}
export declare class DeleteLicenseTemplateQueryParams extends SpeakeasyBase {
    forceCascade?: boolean;
}
export declare class DeleteLicenseTemplateSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class DeleteLicenseTemplateRequest extends SpeakeasyBase {
    pathParams: DeleteLicenseTemplatePathParams;
    queryParams: DeleteLicenseTemplateQueryParams;
    security: DeleteLicenseTemplateSecurity;
}
export declare class DeleteLicenseTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
