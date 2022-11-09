import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateOrganizationSamlRolePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=samlRoleId" })
  samlRoleId: string;
}

export enum UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum {
    Full = "full"
,    ReadOnly = "read-only"
,    GuestAmbassador = "guest-ambassador"
,    MonitorOnly = "monitor-only"
}


export class UpdateOrganizationSamlRoleRequestBodyNetworks extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access: UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum;

  @Metadata({ data: "json, name=id" })
  id: string;
}

export enum UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum {
    None = "none"
,    ReadOnly = "read-only"
,    Full = "full"
}

export enum UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum {
    Full = "full"
,    ReadOnly = "read-only"
,    GuestAmbassador = "guest-ambassador"
,    MonitorOnly = "monitor-only"
}


export class UpdateOrganizationSamlRoleRequestBodyTags extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access: UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum;

  @Metadata({ data: "json, name=tag" })
  tag: string;
}


export class UpdateOrganizationSamlRoleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=networks", elemType: operations.UpdateOrganizationSamlRoleRequestBodyNetworks })
  networks?: UpdateOrganizationSamlRoleRequestBodyNetworks[];

  @Metadata({ data: "json, name=orgAccess" })
  orgAccess?: UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum;

  @Metadata({ data: "json, name=role" })
  role?: string;

  @Metadata({ data: "json, name=tags", elemType: operations.UpdateOrganizationSamlRoleRequestBodyTags })
  tags?: UpdateOrganizationSamlRoleRequestBodyTags[];
}


export class UpdateOrganizationSamlRoleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOrganizationSamlRolePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationSamlRoleRequestBody;
}


export class UpdateOrganizationSamlRoleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOrganizationSamlRole200ApplicationJsonObject?: Map<string, any>;
}
