import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for the new resource
**/
export declare class ResourceOptionsInputModel extends SpeakeasyBase {
    bioLink?: string;
    bookingNotification?: number;
    calendarAvailability?: number;
    displayColor?: string;
    effectiveDate?: Date;
    gender?: string;
    googleCalendarId?: string;
    hourly?: number;
    ignoreBusinessHours?: boolean;
    notificationType?: number;
    outlookCalendarId?: string;
    sortKey?: number;
}
