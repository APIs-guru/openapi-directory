import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateOrganizationAdminPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum CreateOrganizationAdminRequestBodyAuthenticationMethodEnum {
    Email = "Email"
,    CiscoSecureXSignOn = "Cisco SecureX Sign-On"
}

export enum CreateOrganizationAdminRequestBodyNetworksAccessEnum {
    Full = "full"
,    ReadOnly = "read-only"
,    GuestAmbassador = "guest-ambassador"
,    MonitorOnly = "monitor-only"
}


export class CreateOrganizationAdminRequestBodyNetworks extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access: CreateOrganizationAdminRequestBodyNetworksAccessEnum;

  @Metadata({ data: "json, name=id" })
  id: string;
}

export enum CreateOrganizationAdminRequestBodyOrgAccessEnum {
    Full = "full"
,    ReadOnly = "read-only"
,    Enterprise = "enterprise"
,    None = "none"
}

export enum CreateOrganizationAdminRequestBodyTagsAccessEnum {
    Full = "full"
,    ReadOnly = "read-only"
,    GuestAmbassador = "guest-ambassador"
,    MonitorOnly = "monitor-only"
}


export class CreateOrganizationAdminRequestBodyTags extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access: CreateOrganizationAdminRequestBodyTagsAccessEnum;

  @Metadata({ data: "json, name=tag" })
  tag: string;
}


export class CreateOrganizationAdminRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=authenticationMethod" })
  authenticationMethod?: CreateOrganizationAdminRequestBodyAuthenticationMethodEnum;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=networks", elemType: operations.CreateOrganizationAdminRequestBodyNetworks })
  networks?: CreateOrganizationAdminRequestBodyNetworks[];

  @Metadata({ data: "json, name=orgAccess" })
  orgAccess: CreateOrganizationAdminRequestBodyOrgAccessEnum;

  @Metadata({ data: "json, name=tags", elemType: operations.CreateOrganizationAdminRequestBodyTags })
  tags?: CreateOrganizationAdminRequestBodyTags[];
}


export class CreateOrganizationAdminRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateOrganizationAdminPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateOrganizationAdminRequestBody;
}


export class CreateOrganizationAdminResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createOrganizationAdmin201ApplicationJsonObject?: Map<string, any>;
}
