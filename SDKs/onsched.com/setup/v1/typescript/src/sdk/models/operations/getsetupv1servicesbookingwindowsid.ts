import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSetupV1ServicesBookingwindowsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1ServicesBookingwindowsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSetupV1ServicesBookingwindowsIdPathParams;
}


export class GetSetupV1ServicesBookingwindowsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bookingWindowViewModel?: shared.BookingWindowViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
