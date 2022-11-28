import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationActionBatchesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum GetOrganizationActionBatchesStatusEnum {
    Pending = "pending",
    Completed = "completed",
    Failed = "failed"
}


export class GetOrganizationActionBatchesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetOrganizationActionBatchesStatusEnum;
}


export class GetOrganizationActionBatchesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationActionBatchesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOrganizationActionBatchesQueryParams;
}


export class GetOrganizationActionBatchesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationActionBatches200ApplicationJsonObject?: Map<string, any>;
}
