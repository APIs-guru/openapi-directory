import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateOrganizationSamlRolePathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare enum CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum {
    Full = "full",
    ReadOnly = "read-only",
    GuestAmbassador = "guest-ambassador",
    MonitorOnly = "monitor-only"
}
export declare class CreateOrganizationSamlRoleRequestBodyNetworks extends SpeakeasyBase {
    access: CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum;
    id: string;
}
export declare enum CreateOrganizationSamlRoleRequestBodyOrgAccessEnum {
    None = "none",
    ReadOnly = "read-only",
    Full = "full"
}
export declare enum CreateOrganizationSamlRoleRequestBodyTagsAccessEnum {
    Full = "full",
    ReadOnly = "read-only",
    GuestAmbassador = "guest-ambassador",
    MonitorOnly = "monitor-only"
}
export declare class CreateOrganizationSamlRoleRequestBodyTags extends SpeakeasyBase {
    access: CreateOrganizationSamlRoleRequestBodyTagsAccessEnum;
    tag: string;
}
export declare class CreateOrganizationSamlRoleRequestBody extends SpeakeasyBase {
    networks?: CreateOrganizationSamlRoleRequestBodyNetworks[];
    orgAccess: CreateOrganizationSamlRoleRequestBodyOrgAccessEnum;
    role: string;
    tags?: CreateOrganizationSamlRoleRequestBodyTags[];
}
export declare class CreateOrganizationSamlRoleRequest extends SpeakeasyBase {
    pathParams: CreateOrganizationSamlRolePathParams;
    request: CreateOrganizationSamlRoleRequestBody;
}
export declare class CreateOrganizationSamlRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createOrganizationSamlRole201ApplicationJsonObject?: Map<string, any>;
}
