import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationActionBatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=actionBatchId" })
  actionBatchId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationActionBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationActionBatchPathParams;
}


export class GetOrganizationActionBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationActionBatch200ApplicationJsonObject?: Map<string, any>;
}
