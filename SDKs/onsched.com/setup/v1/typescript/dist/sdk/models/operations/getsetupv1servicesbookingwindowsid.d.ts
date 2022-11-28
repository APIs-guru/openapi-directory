import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1ServicesBookingwindowsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1ServicesBookingwindowsIdRequest extends SpeakeasyBase {
    pathParams: GetSetupV1ServicesBookingwindowsIdPathParams;
}
export declare class GetSetupV1ServicesBookingwindowsIdResponse extends SpeakeasyBase {
    bookingWindowViewModel?: shared.BookingWindowViewModel;
    contentType: string;
    statusCode: number;
}
