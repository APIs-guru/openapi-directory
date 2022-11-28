import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1ServicesIdBookingwindowsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1ServicesIdBookingwindowsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetSetupV1ServicesIdBookingwindowsRequest extends SpeakeasyBase {
    pathParams: GetSetupV1ServicesIdBookingwindowsPathParams;
    queryParams: GetSetupV1ServicesIdBookingwindowsQueryParams;
}
export declare class GetSetupV1ServicesIdBookingwindowsResponse extends SpeakeasyBase {
    bookingWindowViewModel?: shared.BookingWindowViewModel;
    contentType: string;
    statusCode: number;
}
