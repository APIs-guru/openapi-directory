import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GooglePrivacyDlpV2TimePartConfigPartToExtractEnum {
    TimePartUnspecified = "TIME_PART_UNSPECIFIED",
    Year = "YEAR",
    Month = "MONTH",
    DayOfMonth = "DAY_OF_MONTH",
    DayOfWeek = "DAY_OF_WEEK",
    WeekOfYear = "WEEK_OF_YEAR",
    HourOfDay = "HOUR_OF_DAY"
}
/**
 * For use with `Date`, `Timestamp`, and `TimeOfDay`, extract or preserve a portion of the value.
**/
export declare class GooglePrivacyDlpV2TimePartConfig extends SpeakeasyBase {
    partToExtract?: GooglePrivacyDlpV2TimePartConfigPartToExtractEnum;
}
