import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConsumerV1ResourcesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resourceGroupId" })
  resourceGroupId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: string;
}


export class GetConsumerV1ResourcesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConsumerV1ResourcesQueryParams;
}


export class GetConsumerV1ResourcesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceListViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
