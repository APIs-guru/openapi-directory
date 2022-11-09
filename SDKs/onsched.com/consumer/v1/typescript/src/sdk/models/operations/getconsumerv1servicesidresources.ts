import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConsumerV1ServicesIdResourcesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetConsumerV1ServicesIdResourcesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetConsumerV1ServicesIdResourcesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConsumerV1ServicesIdResourcesPathParams;

  @Metadata()
  queryParams: GetConsumerV1ServicesIdResourcesQueryParams;
}


export class GetConsumerV1ServicesIdResourcesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceListViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
