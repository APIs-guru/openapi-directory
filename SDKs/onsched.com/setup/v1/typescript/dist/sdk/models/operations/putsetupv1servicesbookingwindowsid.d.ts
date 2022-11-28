import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1ServicesBookingwindowsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutSetupV1ServicesBookingwindowsIdRequests extends SpeakeasyBase {
    bookingWindowUpdateModel?: shared.BookingWindowUpdateModel;
    bookingWindowUpdateModel1?: shared.BookingWindowUpdateModel;
    bookingWindowUpdateModel2?: shared.BookingWindowUpdateModel;
    bookingWindowUpdateModel3?: shared.BookingWindowUpdateModel;
}
export declare class PutSetupV1ServicesBookingwindowsIdRequest extends SpeakeasyBase {
    pathParams: PutSetupV1ServicesBookingwindowsIdPathParams;
    request?: PutSetupV1ServicesBookingwindowsIdRequests;
}
export declare class PutSetupV1ServicesBookingwindowsIdResponse extends SpeakeasyBase {
    bookingWindowViewModel?: shared.BookingWindowViewModel;
    contentType: string;
    statusCode: number;
}
