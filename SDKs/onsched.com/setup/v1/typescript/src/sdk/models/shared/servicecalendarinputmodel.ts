import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ServiceCalendarInputModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=calendarId" })
  calendarId?: string;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=serviceId" })
  serviceId?: string;
}
