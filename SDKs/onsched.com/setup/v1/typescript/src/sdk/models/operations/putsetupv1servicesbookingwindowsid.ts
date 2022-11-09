import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1ServicesBookingwindowsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ServicesBookingwindowsIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  bookingWindowUpdateModel?: shared.BookingWindowUpdateModel;

  @Metadata({ data: "request, media_type=application/json" })
  bookingWindowUpdateModel1?: shared.BookingWindowUpdateModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  bookingWindowUpdateModel2?: shared.BookingWindowUpdateModel;

  @Metadata({ data: "request, media_type=text/json" })
  bookingWindowUpdateModel3?: shared.BookingWindowUpdateModel;
}


export class PutSetupV1ServicesBookingwindowsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSetupV1ServicesBookingwindowsIdPathParams;

  @Metadata()
  request?: PutSetupV1ServicesBookingwindowsIdRequests;
}


export class PutSetupV1ServicesBookingwindowsIdResponse extends SpeakeasyBase {
  @Metadata()
  bookingWindowViewModel?: shared.BookingWindowViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
