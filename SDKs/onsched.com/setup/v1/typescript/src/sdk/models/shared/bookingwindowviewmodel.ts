import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BookingWindowViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fromTime" })
  fromTime?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=maxBookings" })
  maxBookings?: number;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceId" })
  serviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=toTime" })
  toTime?: number;
}
