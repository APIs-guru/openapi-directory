import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConsumerV1ServicesIdResourcesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetConsumerV1ServicesIdResourcesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetConsumerV1ServicesIdResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConsumerV1ServicesIdResourcesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetConsumerV1ServicesIdResourcesQueryParams;
}


export class GetConsumerV1ServicesIdResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceListViewModel?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
