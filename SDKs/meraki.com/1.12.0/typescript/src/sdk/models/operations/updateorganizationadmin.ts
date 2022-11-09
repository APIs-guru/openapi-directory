import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateOrganizationAdminPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=adminId" })
  adminId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum UpdateOrganizationAdminRequestBodyNetworksAccessEnum {
    Full = "full"
,    ReadOnly = "read-only"
,    GuestAmbassador = "guest-ambassador"
,    MonitorOnly = "monitor-only"
}


export class UpdateOrganizationAdminRequestBodyNetworks extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access: UpdateOrganizationAdminRequestBodyNetworksAccessEnum;

  @Metadata({ data: "json, name=id" })
  id: string;
}

export enum UpdateOrganizationAdminRequestBodyOrgAccessEnum {
    Full = "full"
,    ReadOnly = "read-only"
,    Enterprise = "enterprise"
,    None = "none"
}

export enum UpdateOrganizationAdminRequestBodyTagsAccessEnum {
    Full = "full"
,    ReadOnly = "read-only"
,    GuestAmbassador = "guest-ambassador"
,    MonitorOnly = "monitor-only"
}


export class UpdateOrganizationAdminRequestBodyTags extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access: UpdateOrganizationAdminRequestBodyTagsAccessEnum;

  @Metadata({ data: "json, name=tag" })
  tag: string;
}


export class UpdateOrganizationAdminRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=networks", elemType: operations.UpdateOrganizationAdminRequestBodyNetworks })
  networks?: UpdateOrganizationAdminRequestBodyNetworks[];

  @Metadata({ data: "json, name=orgAccess" })
  orgAccess?: UpdateOrganizationAdminRequestBodyOrgAccessEnum;

  @Metadata({ data: "json, name=tags", elemType: operations.UpdateOrganizationAdminRequestBodyTags })
  tags?: UpdateOrganizationAdminRequestBodyTags[];
}


export class UpdateOrganizationAdminRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOrganizationAdminPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationAdminRequestBody;
}


export class UpdateOrganizationAdminResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOrganizationAdmin200ApplicationJsonObject?: Map<string, any>;
}
