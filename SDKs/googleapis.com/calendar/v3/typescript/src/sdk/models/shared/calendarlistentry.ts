import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConferenceProperties } from "./conferenceproperties";
import { EventReminder } from "./eventreminder";
import { CalendarNotification } from "./calendarnotification";


// CalendarListEntryNotificationSettings
/** 
 * The notifications that the authenticated user is receiving for this calendar.
**/
export class CalendarListEntryNotificationSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=notifications", elemType: shared.CalendarNotification })
  notifications?: CalendarNotification[];
}


export class CalendarListEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessRole" })
  accessRole?: string;

  @Metadata({ data: "json, name=backgroundColor" })
  backgroundColor?: string;

  @Metadata({ data: "json, name=colorId" })
  colorId?: string;

  @Metadata({ data: "json, name=conferenceProperties" })
  conferenceProperties?: ConferenceProperties;

  @Metadata({ data: "json, name=defaultReminders", elemType: shared.EventReminder })
  defaultReminders?: EventReminder[];

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=foregroundColor" })
  foregroundColor?: string;

  @Metadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=notificationSettings" })
  notificationSettings?: CalendarListEntryNotificationSettings;

  @Metadata({ data: "json, name=primary" })
  primary?: boolean;

  @Metadata({ data: "json, name=selected" })
  selected?: boolean;

  @Metadata({ data: "json, name=summary" })
  summary?: string;

  @Metadata({ data: "json, name=summaryOverride" })
  summaryOverride?: string;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
