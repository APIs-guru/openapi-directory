import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BookingWindowUpdateModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fromTime" })
  fromTime?: number;

  @SpeakeasyMetadata({ data: "json, name=maxBookings" })
  maxBookings?: number;

  @SpeakeasyMetadata({ data: "json, name=serviceId" })
  serviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=toTime" })
  toTime?: number;
}
