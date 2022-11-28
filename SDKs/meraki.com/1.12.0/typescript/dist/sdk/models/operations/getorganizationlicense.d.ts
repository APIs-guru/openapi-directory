import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationLicensePathParams extends SpeakeasyBase {
    licenseId: string;
    organizationId: string;
}
export declare class GetOrganizationLicenseRequest extends SpeakeasyBase {
    pathParams: GetOrganizationLicensePathParams;
}
export declare class GetOrganizationLicenseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationLicense200ApplicationJsonObject?: Map<string, any>;
}
