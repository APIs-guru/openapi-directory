import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateOrganizationSamlRolePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=samlRoleId" })
  samlRoleId: string;
}

export enum UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum {
    Full = "full",
    ReadOnly = "read-only",
    GuestAmbassador = "guest-ambassador",
    MonitorOnly = "monitor-only"
}


export class UpdateOrganizationSamlRoleRequestBodyNetworks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access: UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}

export enum UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum {
    None = "none",
    ReadOnly = "read-only",
    Full = "full"
}

export enum UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum {
    Full = "full",
    ReadOnly = "read-only",
    GuestAmbassador = "guest-ambassador",
    MonitorOnly = "monitor-only"
}


export class UpdateOrganizationSamlRoleRequestBodyTags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access: UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag: string;
}


export class UpdateOrganizationSamlRoleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=networks", elemType: UpdateOrganizationSamlRoleRequestBodyNetworks })
  networks?: UpdateOrganizationSamlRoleRequestBodyNetworks[];

  @SpeakeasyMetadata({ data: "json, name=orgAccess" })
  orgAccess?: UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: UpdateOrganizationSamlRoleRequestBodyTags })
  tags?: UpdateOrganizationSamlRoleRequestBodyTags[];
}


export class UpdateOrganizationSamlRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateOrganizationSamlRolePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationSamlRoleRequestBody;
}


export class UpdateOrganizationSamlRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateOrganizationSamlRole200ApplicationJsonObject?: Map<string, any>;
}
