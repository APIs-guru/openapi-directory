import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CalendarAuthViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calendarAuthUrl" })
  calendarAuthUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=calendarId" })
  calendarId?: string;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;
}
