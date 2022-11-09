import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteOrganizationSamlRolePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=samlRoleId" })
  samlRoleId: string;
}


export class DeleteOrganizationSamlRoleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteOrganizationSamlRolePathParams;
}


export class DeleteOrganizationSamlRoleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
