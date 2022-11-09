import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConsumerV1LocationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ignorePrimary" })
  ignorePrimary?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nearestTo" })
  nearestTo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=proximity" })
  proximity?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=regionId" })
  regionId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceId" })
  serviceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=units" })
  units?: string;
}


export class GetConsumerV1LocationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConsumerV1LocationsQueryParams;
}


export class GetConsumerV1LocationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  locationListViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
