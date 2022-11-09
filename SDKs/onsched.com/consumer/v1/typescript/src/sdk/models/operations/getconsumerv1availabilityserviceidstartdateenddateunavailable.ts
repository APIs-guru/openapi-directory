import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailablePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=endDate" })
  endDate: Date;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=startDate" })
  startDate: Date;
}


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=duration" })
  duration?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fullServerBasedAvailability" })
  fullServerBasedAvailability?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tzOffset" })
  tzOffset?: number;
}


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailablePathParams;

  @Metadata()
  queryParams: GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryParams;
}


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  unavailableTimeListViewModel?: Map<string, any>;
}
