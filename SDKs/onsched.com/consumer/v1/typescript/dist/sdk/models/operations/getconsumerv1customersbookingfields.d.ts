import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetConsumerV1CustomersBookingfieldsQueryParams extends SpeakeasyBase {
    locationId?: string;
}
export declare class GetConsumerV1CustomersBookingfieldsRequest extends SpeakeasyBase {
    queryParams: GetConsumerV1CustomersBookingfieldsQueryParams;
}
export declare class GetConsumerV1CustomersBookingfieldsResponse extends SpeakeasyBase {
    bookingFieldListViewModel?: shared.BookingFieldListViewModel;
    contentType: string;
    statusCode: number;
}
