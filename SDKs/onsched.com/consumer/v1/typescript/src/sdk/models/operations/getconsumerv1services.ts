import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConsumerV1ServicesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allLocations" })
  allLocations?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=defaultService" })
  defaultService?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceGroupId" })
  serviceGroupId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceId" })
  serviceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortDescending" })
  sortDescending?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: number;
}


export class GetConsumerV1ServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetConsumerV1ServicesQueryParams;
}


export class GetConsumerV1ServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceListViewModel?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
