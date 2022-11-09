import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=endDate" })
  endDate: Date;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=startDate" })
  startDate: Date;
}


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tzOffset" })
  tzOffset?: number;
}


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysPathParams;

  @Metadata()
  queryParams: GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysQueryParams;
}


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysResponse extends SpeakeasyBase {
  @Metadata()
  availabilityDayViewModel?: shared.AvailabilityDayViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
