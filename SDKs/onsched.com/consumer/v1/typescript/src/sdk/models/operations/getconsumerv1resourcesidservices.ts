import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConsumerV1ResourcesIdServicesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetConsumerV1ResourcesIdServicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetConsumerV1ResourcesIdServicesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConsumerV1ResourcesIdServicesPathParams;

  @Metadata()
  queryParams: GetConsumerV1ResourcesIdServicesQueryParams;
}


export class GetConsumerV1ResourcesIdServicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceServiceListViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
