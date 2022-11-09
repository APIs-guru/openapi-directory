import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConsumerV1ServicesIdAllocationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetConsumerV1ServicesIdAllocationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: Date;
}


export class GetConsumerV1ServicesIdAllocationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConsumerV1ServicesIdAllocationsPathParams;

  @Metadata()
  queryParams: GetConsumerV1ServicesIdAllocationsQueryParams;
}


export class GetConsumerV1ServicesIdAllocationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceAllocationListViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
