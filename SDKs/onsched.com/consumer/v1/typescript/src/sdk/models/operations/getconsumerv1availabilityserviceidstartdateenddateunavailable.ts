import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=endDate" })
  endDate: Date;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=startDate" })
  startDate: Date;
}


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fullServerBasedAvailability" })
  fullServerBasedAvailability?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tzOffset" })
  tzOffset?: number;
}


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailablePathParams;

  @SpeakeasyMetadata()
  queryParams: GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryParams;
}


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unavailableTimeListViewModel?: Map<string, any>;
}
