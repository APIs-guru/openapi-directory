import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BookingWindowViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=fromTime" })
  fromTime?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=maxBookings" })
  maxBookings?: number;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;

  @Metadata({ data: "json, name=serviceId" })
  serviceId?: string;

  @Metadata({ data: "json, name=toTime" })
  toTime?: number;
}
