import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateOrganizationAdminPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare enum CreateOrganizationAdminRequestBodyAuthenticationMethodEnum {
    Email = "Email",
    CiscoSecureXSignOn = "Cisco SecureX Sign-On"
}
export declare enum CreateOrganizationAdminRequestBodyNetworksAccessEnum {
    Full = "full",
    ReadOnly = "read-only",
    GuestAmbassador = "guest-ambassador",
    MonitorOnly = "monitor-only"
}
export declare class CreateOrganizationAdminRequestBodyNetworks extends SpeakeasyBase {
    access: CreateOrganizationAdminRequestBodyNetworksAccessEnum;
    id: string;
}
export declare enum CreateOrganizationAdminRequestBodyOrgAccessEnum {
    Full = "full",
    ReadOnly = "read-only",
    Enterprise = "enterprise",
    None = "none"
}
export declare enum CreateOrganizationAdminRequestBodyTagsAccessEnum {
    Full = "full",
    ReadOnly = "read-only",
    GuestAmbassador = "guest-ambassador",
    MonitorOnly = "monitor-only"
}
export declare class CreateOrganizationAdminRequestBodyTags extends SpeakeasyBase {
    access: CreateOrganizationAdminRequestBodyTagsAccessEnum;
    tag: string;
}
export declare class CreateOrganizationAdminRequestBody extends SpeakeasyBase {
    authenticationMethod?: CreateOrganizationAdminRequestBodyAuthenticationMethodEnum;
    email: string;
    name: string;
    networks?: CreateOrganizationAdminRequestBodyNetworks[];
    orgAccess: CreateOrganizationAdminRequestBodyOrgAccessEnum;
    tags?: CreateOrganizationAdminRequestBodyTags[];
}
export declare class CreateOrganizationAdminRequest extends SpeakeasyBase {
    pathParams: CreateOrganizationAdminPathParams;
    request: CreateOrganizationAdminRequestBody;
}
export declare class CreateOrganizationAdminResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createOrganizationAdmin201ApplicationJsonObject?: Map<string, any>;
}
