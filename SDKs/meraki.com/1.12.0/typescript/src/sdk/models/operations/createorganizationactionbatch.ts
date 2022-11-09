import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateOrganizationActionBatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class CreateOrganizationActionBatchRequestBodyActions extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: Map<string, any>;

  @Metadata({ data: "json, name=operation" })
  operation: string;

  @Metadata({ data: "json, name=resource" })
  resource: string;
}


export class CreateOrganizationActionBatchRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: operations.CreateOrganizationActionBatchRequestBodyActions })
  actions: CreateOrganizationActionBatchRequestBodyActions[];

  @Metadata({ data: "json, name=confirmed" })
  confirmed?: boolean;

  @Metadata({ data: "json, name=synchronous" })
  synchronous?: boolean;
}


export class CreateOrganizationActionBatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateOrganizationActionBatchPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateOrganizationActionBatchRequestBody;
}


export class CreateOrganizationActionBatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createOrganizationActionBatch201ApplicationJsonObject?: Map<string, any>;
}
