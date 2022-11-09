import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConsumerV1CustomersBookingfieldsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;
}


export class GetConsumerV1CustomersBookingfieldsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConsumerV1CustomersBookingfieldsQueryParams;
}


export class GetConsumerV1CustomersBookingfieldsResponse extends SpeakeasyBase {
  @Metadata()
  bookingFieldListViewModel?: shared.BookingFieldListViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
