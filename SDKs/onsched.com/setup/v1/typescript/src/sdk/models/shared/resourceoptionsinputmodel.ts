import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceOptionsInputModel
/** 
 * Options for the new resource
**/
export class ResourceOptionsInputModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=bioLink" })
  bioLink?: string;

  @Metadata({ data: "json, name=bookingNotification" })
  bookingNotification?: number;

  @Metadata({ data: "json, name=calendarAvailability" })
  calendarAvailability?: number;

  @Metadata({ data: "json, name=displayColor" })
  displayColor?: string;

  @Metadata({ data: "json, name=effectiveDate" })
  effectiveDate?: Date;

  @Metadata({ data: "json, name=gender" })
  gender?: string;

  @Metadata({ data: "json, name=googleCalendarId" })
  googleCalendarId?: string;

  @Metadata({ data: "json, name=hourly" })
  hourly?: number;

  @Metadata({ data: "json, name=ignoreBusinessHours" })
  ignoreBusinessHours?: boolean;

  @Metadata({ data: "json, name=notificationType" })
  notificationType?: number;

  @Metadata({ data: "json, name=outlookCalendarId" })
  outlookCalendarId?: string;

  @Metadata({ data: "json, name=sortKey" })
  sortKey?: number;
}
