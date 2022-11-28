import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConsumerV1CustomersBookingfieldsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;
}


export class GetConsumerV1CustomersBookingfieldsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetConsumerV1CustomersBookingfieldsQueryParams;
}


export class GetConsumerV1CustomersBookingfieldsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bookingFieldListViewModel?: shared.BookingFieldListViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
