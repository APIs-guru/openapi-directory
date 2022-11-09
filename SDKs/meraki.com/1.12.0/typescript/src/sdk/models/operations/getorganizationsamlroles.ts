import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationSamlRolesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationSamlRolesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationSamlRolesPathParams;
}


export class GetOrganizationSamlRolesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationSamlRoles200ApplicationJsonObject?: Map<string, any>;
}
