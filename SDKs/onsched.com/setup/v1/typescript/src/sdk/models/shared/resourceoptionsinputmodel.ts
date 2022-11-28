import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceOptionsInputModel
/** 
 * Options for the new resource
**/
export class ResourceOptionsInputModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bioLink" })
  bioLink?: string;

  @SpeakeasyMetadata({ data: "json, name=bookingNotification" })
  bookingNotification?: number;

  @SpeakeasyMetadata({ data: "json, name=calendarAvailability" })
  calendarAvailability?: number;

  @SpeakeasyMetadata({ data: "json, name=displayColor" })
  displayColor?: string;

  @SpeakeasyMetadata({ data: "json, name=effectiveDate" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "json, name=googleCalendarId" })
  googleCalendarId?: string;

  @SpeakeasyMetadata({ data: "json, name=hourly" })
  hourly?: number;

  @SpeakeasyMetadata({ data: "json, name=ignoreBusinessHours" })
  ignoreBusinessHours?: boolean;

  @SpeakeasyMetadata({ data: "json, name=notificationType" })
  notificationType?: number;

  @SpeakeasyMetadata({ data: "json, name=outlookCalendarId" })
  outlookCalendarId?: string;

  @SpeakeasyMetadata({ data: "json, name=sortKey" })
  sortKey?: number;
}
