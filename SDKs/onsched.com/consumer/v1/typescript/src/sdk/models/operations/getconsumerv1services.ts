import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConsumerV1ServicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=allLocations" })
  allLocations?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=defaultService" })
  defaultService?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceGroupId" })
  serviceGroupId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceId" })
  serviceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortDescending" })
  sortDescending?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: number;
}


export class GetConsumerV1ServicesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConsumerV1ServicesQueryParams;
}


export class GetConsumerV1ServicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceListViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
