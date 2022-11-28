import { SpeakeasyBase } from "../../../internal/utils";
import { ConferenceProperties } from "./conferenceproperties";
import { EventReminder } from "./eventreminder";
import { CalendarNotification } from "./calendarnotification";
/**
 * The notifications that the authenticated user is receiving for this calendar.
**/
export declare class CalendarListEntryNotificationSettings extends SpeakeasyBase {
    notifications?: CalendarNotification[];
}
export declare class CalendarListEntry extends SpeakeasyBase {
    accessRole?: string;
    backgroundColor?: string;
    colorId?: string;
    conferenceProperties?: ConferenceProperties;
    defaultReminders?: EventReminder[];
    deleted?: boolean;
    description?: string;
    etag?: string;
    foregroundColor?: string;
    hidden?: boolean;
    id?: string;
    kind?: string;
    location?: string;
    notificationSettings?: CalendarListEntryNotificationSettings;
    primary?: boolean;
    selected?: boolean;
    summary?: string;
    summaryOverride?: string;
    timeZone?: string;
}
