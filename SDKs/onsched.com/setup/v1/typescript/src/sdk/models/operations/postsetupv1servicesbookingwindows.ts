import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1ServicesBookingwindowsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  bookingWindowInputModel?: shared.BookingWindowInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  bookingWindowInputModel1?: shared.BookingWindowInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  bookingWindowInputModel2?: shared.BookingWindowInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  bookingWindowInputModel3?: shared.BookingWindowInputModel;
}


export class PostSetupV1ServicesBookingwindowsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostSetupV1ServicesBookingwindowsRequests;
}


export class PostSetupV1ServicesBookingwindowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bookingWindowViewModel?: shared.BookingWindowViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
