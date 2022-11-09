import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1ServicesBookingwindowsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1ServicesBookingwindowsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1ServicesBookingwindowsIdPathParams;
}


export class GetSetupV1ServicesBookingwindowsIdResponse extends SpeakeasyBase {
  @Metadata()
  bookingWindowViewModel?: shared.BookingWindowViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
