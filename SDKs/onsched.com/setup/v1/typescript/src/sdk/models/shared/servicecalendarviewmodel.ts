import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ServiceCalendarViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=calendarId" })
  calendarId?: string;

  @Metadata({ data: "json, name=calendarName" })
  calendarName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=serviceId" })
  serviceId?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
