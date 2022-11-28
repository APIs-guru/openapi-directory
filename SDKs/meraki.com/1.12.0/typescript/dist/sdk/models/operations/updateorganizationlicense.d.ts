import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateOrganizationLicensePathParams extends SpeakeasyBase {
    licenseId: string;
    organizationId: string;
}
export declare class UpdateOrganizationLicenseRequestBody extends SpeakeasyBase {
    deviceSerial?: string;
}
export declare class UpdateOrganizationLicenseRequest extends SpeakeasyBase {
    pathParams: UpdateOrganizationLicensePathParams;
    request?: UpdateOrganizationLicenseRequestBody;
}
export declare class UpdateOrganizationLicenseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateOrganizationLicense200ApplicationJsonObject?: Map<string, any>;
}
