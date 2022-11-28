import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateOrganizationSamlRolePathParams extends SpeakeasyBase {
    organizationId: string;
    samlRoleId: string;
}
export declare enum UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum {
    Full = "full",
    ReadOnly = "read-only",
    GuestAmbassador = "guest-ambassador",
    MonitorOnly = "monitor-only"
}
export declare class UpdateOrganizationSamlRoleRequestBodyNetworks extends SpeakeasyBase {
    access: UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum;
    id: string;
}
export declare enum UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum {
    None = "none",
    ReadOnly = "read-only",
    Full = "full"
}
export declare enum UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum {
    Full = "full",
    ReadOnly = "read-only",
    GuestAmbassador = "guest-ambassador",
    MonitorOnly = "monitor-only"
}
export declare class UpdateOrganizationSamlRoleRequestBodyTags extends SpeakeasyBase {
    access: UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum;
    tag: string;
}
export declare class UpdateOrganizationSamlRoleRequestBody extends SpeakeasyBase {
    networks?: UpdateOrganizationSamlRoleRequestBodyNetworks[];
    orgAccess?: UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum;
    role?: string;
    tags?: UpdateOrganizationSamlRoleRequestBodyTags[];
}
export declare class UpdateOrganizationSamlRoleRequest extends SpeakeasyBase {
    pathParams: UpdateOrganizationSamlRolePathParams;
    request?: UpdateOrganizationSamlRoleRequestBody;
}
export declare class UpdateOrganizationSamlRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateOrganizationSamlRole200ApplicationJsonObject?: Map<string, any>;
}
