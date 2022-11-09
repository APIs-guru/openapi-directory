import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1ServicesBookingwindowsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  bookingWindowInputModel?: shared.BookingWindowInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  bookingWindowInputModel1?: shared.BookingWindowInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  bookingWindowInputModel2?: shared.BookingWindowInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  bookingWindowInputModel3?: shared.BookingWindowInputModel;
}


export class PostSetupV1ServicesBookingwindowsRequest extends SpeakeasyBase {
  @Metadata()
  request?: PostSetupV1ServicesBookingwindowsRequests;
}


export class PostSetupV1ServicesBookingwindowsResponse extends SpeakeasyBase {
  @Metadata()
  bookingWindowViewModel?: shared.BookingWindowViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
