import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConsumerV1ResourcesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceGroupId" })
  resourceGroupId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: string;
}


export class GetConsumerV1ResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetConsumerV1ResourcesQueryParams;
}


export class GetConsumerV1ResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceListViewModel?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
