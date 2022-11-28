import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";
import { GoogleTypeTimeOfDay } from "./googletypetimeofday";
import { GooglePrivacyDlpV2TimeZone } from "./googleprivacydlpv2timezone";
export declare enum GooglePrivacyDlpV2DateTimeDayOfWeekEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED",
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}
/**
 * Message for a date time object. e.g. 2018-01-01, 5th August.
**/
export declare class GooglePrivacyDlpV2DateTime extends SpeakeasyBase {
    date?: GoogleTypeDate;
    dayOfWeek?: GooglePrivacyDlpV2DateTimeDayOfWeekEnum;
    time?: GoogleTypeTimeOfDay;
    timeZone?: GooglePrivacyDlpV2TimeZone;
}
