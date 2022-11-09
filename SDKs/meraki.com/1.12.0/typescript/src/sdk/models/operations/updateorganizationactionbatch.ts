import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateOrganizationActionBatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=actionBatchId" })
  actionBatchId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class UpdateOrganizationActionBatchRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=confirmed" })
  confirmed?: boolean;

  @Metadata({ data: "json, name=synchronous" })
  synchronous?: boolean;
}


export class UpdateOrganizationActionBatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOrganizationActionBatchPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationActionBatchRequestBody;
}


export class UpdateOrganizationActionBatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOrganizationActionBatch200ApplicationJsonObject?: Map<string, any>;
}
