import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateOrganizationActionBatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=actionBatchId" })
  actionBatchId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class UpdateOrganizationActionBatchRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confirmed" })
  confirmed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=synchronous" })
  synchronous?: boolean;
}


export class UpdateOrganizationActionBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateOrganizationActionBatchPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationActionBatchRequestBody;
}


export class UpdateOrganizationActionBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateOrganizationActionBatch200ApplicationJsonObject?: Map<string, any>;
}
