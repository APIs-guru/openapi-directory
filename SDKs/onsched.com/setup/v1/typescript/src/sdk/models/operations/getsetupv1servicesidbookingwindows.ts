import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSetupV1ServicesIdBookingwindowsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1ServicesIdBookingwindowsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetSetupV1ServicesIdBookingwindowsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSetupV1ServicesIdBookingwindowsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSetupV1ServicesIdBookingwindowsQueryParams;
}


export class GetSetupV1ServicesIdBookingwindowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bookingWindowViewModel?: shared.BookingWindowViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
