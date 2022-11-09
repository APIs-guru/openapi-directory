import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConsumerV1AvailabilityServiceIdStartDateEndDatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=endDate" })
  endDate: Date;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=startDate" })
  startDate: Date;
}


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=fullServerBasedAvailability" })
  fullServerBasedAvailability?: boolean;

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


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConsumerV1AvailabilityServiceIdStartDateEndDatePathParams;

  @Metadata()
  queryParams: GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams;
}


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateResponse extends SpeakeasyBase {
  @Metadata()
  availabilityViewModel?: shared.AvailabilityViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
