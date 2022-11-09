import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1ServicesIdBookingwindowsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1ServicesIdBookingwindowsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetSetupV1ServicesIdBookingwindowsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1ServicesIdBookingwindowsPathParams;

  @Metadata()
  queryParams: GetSetupV1ServicesIdBookingwindowsQueryParams;
}


export class GetSetupV1ServicesIdBookingwindowsResponse extends SpeakeasyBase {
  @Metadata()
  bookingWindowViewModel?: shared.BookingWindowViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
