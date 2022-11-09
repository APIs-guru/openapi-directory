import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationLoginSecurityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationLoginSecurityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationLoginSecurityPathParams;
}


export class GetOrganizationLoginSecurityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationLoginSecurity200ApplicationJsonObject?: Map<string, any>;
}
