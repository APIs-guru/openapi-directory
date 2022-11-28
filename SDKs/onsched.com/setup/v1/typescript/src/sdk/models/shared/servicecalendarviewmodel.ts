import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ServiceCalendarViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calendarId" })
  calendarId?: string;

  @SpeakeasyMetadata({ data: "json, name=calendarName" })
  calendarName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceId" })
  serviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
