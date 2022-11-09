import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateOrganizationSamlRolePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum {
    Full = "full"
,    ReadOnly = "read-only"
,    GuestAmbassador = "guest-ambassador"
,    MonitorOnly = "monitor-only"
}


export class CreateOrganizationSamlRoleRequestBodyNetworks extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access: CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum;

  @Metadata({ data: "json, name=id" })
  id: string;
}

export enum CreateOrganizationSamlRoleRequestBodyOrgAccessEnum {
    None = "none"
,    ReadOnly = "read-only"
,    Full = "full"
}

export enum CreateOrganizationSamlRoleRequestBodyTagsAccessEnum {
    Full = "full"
,    ReadOnly = "read-only"
,    GuestAmbassador = "guest-ambassador"
,    MonitorOnly = "monitor-only"
}


export class CreateOrganizationSamlRoleRequestBodyTags extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access: CreateOrganizationSamlRoleRequestBodyTagsAccessEnum;

  @Metadata({ data: "json, name=tag" })
  tag: string;
}


export class CreateOrganizationSamlRoleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=networks", elemType: operations.CreateOrganizationSamlRoleRequestBodyNetworks })
  networks?: CreateOrganizationSamlRoleRequestBodyNetworks[];

  @Metadata({ data: "json, name=orgAccess" })
  orgAccess: CreateOrganizationSamlRoleRequestBodyOrgAccessEnum;

  @Metadata({ data: "json, name=role" })
  role: string;

  @Metadata({ data: "json, name=tags", elemType: operations.CreateOrganizationSamlRoleRequestBodyTags })
  tags?: CreateOrganizationSamlRoleRequestBodyTags[];
}


export class CreateOrganizationSamlRoleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateOrganizationSamlRolePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateOrganizationSamlRoleRequestBody;
}


export class CreateOrganizationSamlRoleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createOrganizationSamlRole201ApplicationJsonObject?: Map<string, any>;
}
