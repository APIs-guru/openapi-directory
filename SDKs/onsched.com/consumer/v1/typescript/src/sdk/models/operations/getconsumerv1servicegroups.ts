import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConsumerV1ServicegroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetConsumerV1ServicegroupsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConsumerV1ServicegroupsQueryParams;
}


export class GetConsumerV1ServicegroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceGroupListViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
