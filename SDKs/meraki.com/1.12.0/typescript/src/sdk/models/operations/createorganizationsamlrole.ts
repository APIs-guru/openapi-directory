import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateOrganizationSamlRolePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum {
    Full = "full",
    ReadOnly = "read-only",
    GuestAmbassador = "guest-ambassador",
    MonitorOnly = "monitor-only"
}


export class CreateOrganizationSamlRoleRequestBodyNetworks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access: CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}

export enum CreateOrganizationSamlRoleRequestBodyOrgAccessEnum {
    None = "none",
    ReadOnly = "read-only",
    Full = "full"
}

export enum CreateOrganizationSamlRoleRequestBodyTagsAccessEnum {
    Full = "full",
    ReadOnly = "read-only",
    GuestAmbassador = "guest-ambassador",
    MonitorOnly = "monitor-only"
}


export class CreateOrganizationSamlRoleRequestBodyTags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access: CreateOrganizationSamlRoleRequestBodyTagsAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag: string;
}


export class CreateOrganizationSamlRoleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=networks", elemType: CreateOrganizationSamlRoleRequestBodyNetworks })
  networks?: CreateOrganizationSamlRoleRequestBodyNetworks[];

  @SpeakeasyMetadata({ data: "json, name=orgAccess" })
  orgAccess: CreateOrganizationSamlRoleRequestBodyOrgAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: CreateOrganizationSamlRoleRequestBodyTags })
  tags?: CreateOrganizationSamlRoleRequestBodyTags[];
}


export class CreateOrganizationSamlRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateOrganizationSamlRolePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateOrganizationSamlRoleRequestBody;
}


export class CreateOrganizationSamlRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createOrganizationSamlRole201ApplicationJsonObject?: Map<string, any>;
}
