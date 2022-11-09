import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteOrganizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class DeleteOrganizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteOrganizationPathParams;
}


export class DeleteOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
