import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConsumerV1LocationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignorePrimary" })
  ignorePrimary?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nearestTo" })
  nearestTo?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proximity" })
  proximity?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regionId" })
  regionId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceId" })
  serviceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=units" })
  units?: string;
}


export class GetConsumerV1LocationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetConsumerV1LocationsQueryParams;
}


export class GetConsumerV1LocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  locationListViewModel?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
