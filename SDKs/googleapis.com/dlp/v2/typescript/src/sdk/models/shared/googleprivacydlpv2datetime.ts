import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";
import { GoogleTypeTimeOfDay } from "./googletypetimeofday";
import { GooglePrivacyDlpV2TimeZone } from "./googleprivacydlpv2timezone";


export enum GooglePrivacyDlpV2DateTimeDayOfWeekEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED",
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}


// GooglePrivacyDlpV2DateTime
/** 
 * Message for a date time object. e.g. 2018-01-01, 5th August.
**/
export class GooglePrivacyDlpV2DateTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: GoogleTypeDate;

  @SpeakeasyMetadata({ data: "json, name=dayOfWeek" })
  dayOfWeek?: GooglePrivacyDlpV2DateTimeDayOfWeekEnum;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: GoogleTypeTimeOfDay;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: GooglePrivacyDlpV2TimeZone;
}
