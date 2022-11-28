import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1ServicesBookingwindowsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ServicesBookingwindowsIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  bookingWindowUpdateModel?: shared.BookingWindowUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  bookingWindowUpdateModel1?: shared.BookingWindowUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  bookingWindowUpdateModel2?: shared.BookingWindowUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  bookingWindowUpdateModel3?: shared.BookingWindowUpdateModel;
}


export class PutSetupV1ServicesBookingwindowsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSetupV1ServicesBookingwindowsIdPathParams;

  @SpeakeasyMetadata()
  request?: PutSetupV1ServicesBookingwindowsIdRequests;
}


export class PutSetupV1ServicesBookingwindowsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bookingWindowViewModel?: shared.BookingWindowViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
