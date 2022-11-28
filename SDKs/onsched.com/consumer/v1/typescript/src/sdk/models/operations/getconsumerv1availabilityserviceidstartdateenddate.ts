import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConsumerV1AvailabilityServiceIdStartDateEndDatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=endDate" })
  endDate: Date;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=startDate" })
  startDate: Date;
}


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dayAvailability" })
  dayAvailability?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dayAvailabilityStartDate" })
  dayAvailabilityStartDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=firstDayAvailable" })
  firstDayAvailable?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fullServerBasedAvailability" })
  fullServerBasedAvailability?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval" })
  interval?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceGroupId" })
  resourceGroupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceIds" })
  resourceIds?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roundRobin" })
  roundRobin?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tzOffset" })
  tzOffset?: number;
}


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConsumerV1AvailabilityServiceIdStartDateEndDatePathParams;

  @SpeakeasyMetadata()
  queryParams: GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams;
}


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityViewModel?: shared.AvailabilityViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
