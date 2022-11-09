import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CalendarAuthViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=calendarAuthUrl" })
  calendarAuthUrl?: string;

  @Metadata({ data: "json, name=calendarId" })
  calendarId?: string;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;
}
