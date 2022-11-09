import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationSamlRolePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=samlRoleId" })
  samlRoleId: string;
}


export class GetOrganizationSamlRoleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationSamlRolePathParams;
}


export class GetOrganizationSamlRoleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationSamlRole200ApplicationJsonObject?: Map<string, any>;
}
