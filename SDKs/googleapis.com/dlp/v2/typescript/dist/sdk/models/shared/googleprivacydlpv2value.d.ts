import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";
import { GoogleTypeTimeOfDay } from "./googletypetimeofday";
export declare enum GooglePrivacyDlpV2ValueDayOfWeekValueEnum {
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
 * Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data.
**/
export declare class GooglePrivacyDlpV2Value extends SpeakeasyBase {
    booleanValue?: boolean;
    dateValue?: GoogleTypeDate;
    dayOfWeekValue?: GooglePrivacyDlpV2ValueDayOfWeekValueEnum;
    floatValue?: number;
    integerValue?: string;
    stringValue?: string;
    timeValue?: GoogleTypeTimeOfDay;
    timestampValue?: string;
}
