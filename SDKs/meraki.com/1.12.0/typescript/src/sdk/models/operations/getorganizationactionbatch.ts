import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationActionBatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=actionBatchId" })
  actionBatchId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationActionBatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationActionBatchPathParams;
}


export class GetOrganizationActionBatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationActionBatch200ApplicationJsonObject?: Map<string, any>;
}
