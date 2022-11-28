import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConferenceProperties } from "./conferenceproperties";
import { EventReminder } from "./eventreminder";
import { CalendarNotification } from "./calendarnotification";



// CalendarListEntryNotificationSettings
/** 
 * The notifications that the authenticated user is receiving for this calendar.
**/
export class CalendarListEntryNotificationSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notifications", elemType: CalendarNotification })
  notifications?: CalendarNotification[];
}


export class CalendarListEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessRole" })
  accessRole?: string;

  @SpeakeasyMetadata({ data: "json, name=backgroundColor" })
  backgroundColor?: string;

  @SpeakeasyMetadata({ data: "json, name=colorId" })
  colorId?: string;

  @SpeakeasyMetadata({ data: "json, name=conferenceProperties" })
  conferenceProperties?: ConferenceProperties;

  @SpeakeasyMetadata({ data: "json, name=defaultReminders", elemType: EventReminder })
  defaultReminders?: EventReminder[];

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=foregroundColor" })
  foregroundColor?: string;

  @SpeakeasyMetadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationSettings" })
  notificationSettings?: CalendarListEntryNotificationSettings;

  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=selected" })
  selected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=summaryOverride" })
  summaryOverride?: string;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
