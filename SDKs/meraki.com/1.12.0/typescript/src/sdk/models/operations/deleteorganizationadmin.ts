import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteOrganizationAdminPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=adminId" })
  adminId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class DeleteOrganizationAdminRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteOrganizationAdminPathParams;
}


export class DeleteOrganizationAdminResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
