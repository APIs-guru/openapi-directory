import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1ServicesBookingwindowsRequests extends SpeakeasyBase {
    bookingWindowInputModel?: shared.BookingWindowInputModel;
    bookingWindowInputModel1?: shared.BookingWindowInputModel;
    bookingWindowInputModel2?: shared.BookingWindowInputModel;
    bookingWindowInputModel3?: shared.BookingWindowInputModel;
}
export declare class PostSetupV1ServicesBookingwindowsRequest extends SpeakeasyBase {
    request?: PostSetupV1ServicesBookingwindowsRequests;
}
export declare class PostSetupV1ServicesBookingwindowsResponse extends SpeakeasyBase {
    bookingWindowViewModel?: shared.BookingWindowViewModel;
    contentType: string;
    statusCode: number;
}
