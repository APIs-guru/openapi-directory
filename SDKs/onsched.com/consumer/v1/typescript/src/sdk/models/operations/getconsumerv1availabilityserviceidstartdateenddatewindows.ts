import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=endDate" })
  endDate: Date;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=startDate" })
  startDate: Date;
}


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=destination" })
  destination?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=duration" })
  duration?: number;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=tzOffset" })
  tzOffset?: number;
}


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsPathParams;

  @Metadata()
  queryParams: GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams;
}


export class GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  windowAvailabilityViewModel?: shared.WindowAvailabilityViewModel;
}
