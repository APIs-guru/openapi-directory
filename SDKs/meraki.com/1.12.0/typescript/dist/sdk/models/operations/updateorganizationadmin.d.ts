import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateOrganizationAdminPathParams extends SpeakeasyBase {
    adminId: string;
    organizationId: string;
}
export declare enum UpdateOrganizationAdminRequestBodyNetworksAccessEnum {
    Full = "full",
    ReadOnly = "read-only",
    GuestAmbassador = "guest-ambassador",
    MonitorOnly = "monitor-only"
}
export declare class UpdateOrganizationAdminRequestBodyNetworks extends SpeakeasyBase {
    access: UpdateOrganizationAdminRequestBodyNetworksAccessEnum;
    id: string;
}
export declare enum UpdateOrganizationAdminRequestBodyOrgAccessEnum {
    Full = "full",
    ReadOnly = "read-only",
    Enterprise = "enterprise",
    None = "none"
}
export declare enum UpdateOrganizationAdminRequestBodyTagsAccessEnum {
    Full = "full",
    ReadOnly = "read-only",
    GuestAmbassador = "guest-ambassador",
    MonitorOnly = "monitor-only"
}
export declare class UpdateOrganizationAdminRequestBodyTags extends SpeakeasyBase {
    access: UpdateOrganizationAdminRequestBodyTagsAccessEnum;
    tag: string;
}
export declare class UpdateOrganizationAdminRequestBody extends SpeakeasyBase {
    name?: string;
    networks?: UpdateOrganizationAdminRequestBodyNetworks[];
    orgAccess?: UpdateOrganizationAdminRequestBodyOrgAccessEnum;
    tags?: UpdateOrganizationAdminRequestBodyTags[];
}
export declare class UpdateOrganizationAdminRequest extends SpeakeasyBase {
    pathParams: UpdateOrganizationAdminPathParams;
    request?: UpdateOrganizationAdminRequestBody;
}
export declare class UpdateOrganizationAdminResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateOrganizationAdmin200ApplicationJsonObject?: Map<string, any>;
}
