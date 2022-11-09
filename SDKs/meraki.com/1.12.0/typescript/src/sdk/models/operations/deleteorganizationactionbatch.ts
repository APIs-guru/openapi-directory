import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteOrganizationActionBatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=actionBatchId" })
  actionBatchId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class DeleteOrganizationActionBatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteOrganizationActionBatchPathParams;
}


export class DeleteOrganizationActionBatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
