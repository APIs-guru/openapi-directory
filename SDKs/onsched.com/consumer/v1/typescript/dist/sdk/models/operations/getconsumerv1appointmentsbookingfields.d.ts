import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetConsumerV1AppointmentsBookingfieldsQueryParams extends SpeakeasyBase {
    locationId?: string;
}
export declare class GetConsumerV1AppointmentsBookingfieldsRequest extends SpeakeasyBase {
    queryParams: GetConsumerV1AppointmentsBookingfieldsQueryParams;
}
export declare class GetConsumerV1AppointmentsBookingfieldsResponse extends SpeakeasyBase {
    bookingFieldListViewModel?: shared.BookingFieldListViewModel;
    contentType: string;
    statusCode: number;
}
