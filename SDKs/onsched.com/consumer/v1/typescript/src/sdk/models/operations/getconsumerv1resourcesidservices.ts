import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConsumerV1ResourcesIdServicesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetConsumerV1ResourcesIdServicesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetConsumerV1ResourcesIdServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConsumerV1ResourcesIdServicesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetConsumerV1ResourcesIdServicesQueryParams;
}


export class GetConsumerV1ResourcesIdServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceServiceListViewModel?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
