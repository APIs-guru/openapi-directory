import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=endDate" })
  endDate: Date;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=startDate" })
  startDate: Date;
}


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tzOffset" })
  tzOffset?: number;
}


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysPathParams;

  @SpeakeasyMetadata()
  queryParams: GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysQueryParams;
}


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityDayViewModel?: shared.AvailabilityDayViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
