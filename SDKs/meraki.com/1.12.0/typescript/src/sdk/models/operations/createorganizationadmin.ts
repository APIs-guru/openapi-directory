import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateOrganizationAdminPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum CreateOrganizationAdminRequestBodyAuthenticationMethodEnum {
    Email = "Email",
    CiscoSecureXSignOn = "Cisco SecureX Sign-On"
}

export enum CreateOrganizationAdminRequestBodyNetworksAccessEnum {
    Full = "full",
    ReadOnly = "read-only",
    GuestAmbassador = "guest-ambassador",
    MonitorOnly = "monitor-only"
}


export class CreateOrganizationAdminRequestBodyNetworks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access: CreateOrganizationAdminRequestBodyNetworksAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}

export enum CreateOrganizationAdminRequestBodyOrgAccessEnum {
    Full = "full",
    ReadOnly = "read-only",
    Enterprise = "enterprise",
    None = "none"
}

export enum CreateOrganizationAdminRequestBodyTagsAccessEnum {
    Full = "full",
    ReadOnly = "read-only",
    GuestAmbassador = "guest-ambassador",
    MonitorOnly = "monitor-only"
}


export class CreateOrganizationAdminRequestBodyTags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access: CreateOrganizationAdminRequestBodyTagsAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag: string;
}


export class CreateOrganizationAdminRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authenticationMethod" })
  authenticationMethod?: CreateOrganizationAdminRequestBodyAuthenticationMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=networks", elemType: CreateOrganizationAdminRequestBodyNetworks })
  networks?: CreateOrganizationAdminRequestBodyNetworks[];

  @SpeakeasyMetadata({ data: "json, name=orgAccess" })
  orgAccess: CreateOrganizationAdminRequestBodyOrgAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: CreateOrganizationAdminRequestBodyTags })
  tags?: CreateOrganizationAdminRequestBodyTags[];
}


export class CreateOrganizationAdminRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateOrganizationAdminPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateOrganizationAdminRequestBody;
}


export class CreateOrganizationAdminResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createOrganizationAdmin201ApplicationJsonObject?: Map<string, any>;
}
