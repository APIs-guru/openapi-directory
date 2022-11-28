import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";
import { GoogleTypeTimeOfDay } from "./googletypetimeofday";


export enum GooglePrivacyDlpV2ValueDayOfWeekValueEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED",
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}


// GooglePrivacyDlpV2Value
/** 
 * Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data.
**/
export class GooglePrivacyDlpV2Value extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dateValue" })
  dateValue?: GoogleTypeDate;

  @SpeakeasyMetadata({ data: "json, name=dayOfWeekValue" })
  dayOfWeekValue?: GooglePrivacyDlpV2ValueDayOfWeekValueEnum;

  @SpeakeasyMetadata({ data: "json, name=floatValue" })
  floatValue?: number;

  @SpeakeasyMetadata({ data: "json, name=integerValue" })
  integerValue?: string;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;

  @SpeakeasyMetadata({ data: "json, name=timeValue" })
  timeValue?: GoogleTypeTimeOfDay;

  @SpeakeasyMetadata({ data: "json, name=timestampValue" })
  timestampValue?: string;
}
