import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConsumerV1AppointmentsBookingfieldsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;
}


export class GetConsumerV1AppointmentsBookingfieldsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetConsumerV1AppointmentsBookingfieldsQueryParams;
}


export class GetConsumerV1AppointmentsBookingfieldsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bookingFieldListViewModel?: shared.BookingFieldListViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
