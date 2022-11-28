import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateOrganizationAdminPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adminId" })
  adminId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum UpdateOrganizationAdminRequestBodyNetworksAccessEnum {
    Full = "full",
    ReadOnly = "read-only",
    GuestAmbassador = "guest-ambassador",
    MonitorOnly = "monitor-only"
}


export class UpdateOrganizationAdminRequestBodyNetworks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access: UpdateOrganizationAdminRequestBodyNetworksAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}

export enum UpdateOrganizationAdminRequestBodyOrgAccessEnum {
    Full = "full",
    ReadOnly = "read-only",
    Enterprise = "enterprise",
    None = "none"
}

export enum UpdateOrganizationAdminRequestBodyTagsAccessEnum {
    Full = "full",
    ReadOnly = "read-only",
    GuestAmbassador = "guest-ambassador",
    MonitorOnly = "monitor-only"
}


export class UpdateOrganizationAdminRequestBodyTags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access: UpdateOrganizationAdminRequestBodyTagsAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag: string;
}


export class UpdateOrganizationAdminRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networks", elemType: UpdateOrganizationAdminRequestBodyNetworks })
  networks?: UpdateOrganizationAdminRequestBodyNetworks[];

  @SpeakeasyMetadata({ data: "json, name=orgAccess" })
  orgAccess?: UpdateOrganizationAdminRequestBodyOrgAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: UpdateOrganizationAdminRequestBodyTags })
  tags?: UpdateOrganizationAdminRequestBodyTags[];
}


export class UpdateOrganizationAdminRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateOrganizationAdminPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationAdminRequestBody;
}


export class UpdateOrganizationAdminResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateOrganizationAdmin200ApplicationJsonObject?: Map<string, any>;
}
