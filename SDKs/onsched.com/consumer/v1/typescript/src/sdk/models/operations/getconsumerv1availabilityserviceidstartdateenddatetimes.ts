import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=endDate" })
  endDate: Date;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=startDate" })
  startDate: Date;
}


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=dayAvailability" })
  dayAvailability?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dayAvailabilityStartDate" })
  dayAvailabilityStartDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=destination" })
  destination?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=duration" })
  duration?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=firstDayAvailable" })
  firstDayAvailable?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval" })
  interval?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resourceGroupId" })
  resourceGroupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resourceIds" })
  resourceIds?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=roundRobin" })
  roundRobin?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tzOffset" })
  tzOffset?: number;
}


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesPathParams;

  @Metadata()
  queryParams: GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams;
}


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesResponse extends SpeakeasyBase {
  @Metadata()
  availability3ViewModel?: shared.Availability3ViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
