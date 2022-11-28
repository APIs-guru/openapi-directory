import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ServiceCalendarInputModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calendarId" })
  calendarId?: string;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceId" })
  serviceId?: string;
}
