import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateOrganizationActionBatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class CreateOrganizationActionBatchRequestBodyActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource: string;
}


export class CreateOrganizationActionBatchRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: CreateOrganizationActionBatchRequestBodyActions })
  actions: CreateOrganizationActionBatchRequestBodyActions[];

  @SpeakeasyMetadata({ data: "json, name=confirmed" })
  confirmed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=synchronous" })
  synchronous?: boolean;
}


export class CreateOrganizationActionBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateOrganizationActionBatchPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateOrganizationActionBatchRequestBody;
}


export class CreateOrganizationActionBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createOrganizationActionBatch201ApplicationJsonObject?: Map<string, any>;
}
