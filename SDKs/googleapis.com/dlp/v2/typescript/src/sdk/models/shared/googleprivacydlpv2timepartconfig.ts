import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GooglePrivacyDlpV2TimePartConfigPartToExtractEnum {
    TimePartUnspecified = "TIME_PART_UNSPECIFIED"
,    Year = "YEAR"
,    Month = "MONTH"
,    DayOfMonth = "DAY_OF_MONTH"
,    DayOfWeek = "DAY_OF_WEEK"
,    WeekOfYear = "WEEK_OF_YEAR"
,    HourOfDay = "HOUR_OF_DAY"
}


// GooglePrivacyDlpV2TimePartConfig
/** 
 * For use with `Date`, `Timestamp`, and `TimeOfDay`, extract or preserve a portion of the value.
**/
export class GooglePrivacyDlpV2TimePartConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=partToExtract" })
  partToExtract?: GooglePrivacyDlpV2TimePartConfigPartToExtractEnum;
}
