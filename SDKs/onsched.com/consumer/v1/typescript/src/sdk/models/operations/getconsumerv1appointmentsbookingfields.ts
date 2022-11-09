import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConsumerV1AppointmentsBookingfieldsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;
}


export class GetConsumerV1AppointmentsBookingfieldsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConsumerV1AppointmentsBookingfieldsQueryParams;
}


export class GetConsumerV1AppointmentsBookingfieldsResponse extends SpeakeasyBase {
  @Metadata()
  bookingFieldListViewModel?: shared.BookingFieldListViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
