import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeDate } from "./googletypedate";
import { GoogleTypeTimeOfDay } from "./googletypetimeofday";

export enum GooglePrivacyDlpV2ValueDayOfWeekValueEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED"
,    Monday = "MONDAY"
,    Tuesday = "TUESDAY"
,    Wednesday = "WEDNESDAY"
,    Thursday = "THURSDAY"
,    Friday = "FRIDAY"
,    Saturday = "SATURDAY"
,    Sunday = "SUNDAY"
}


// GooglePrivacyDlpV2Value
/** 
 * Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data.
**/
export class GooglePrivacyDlpV2Value extends SpeakeasyBase {
  @Metadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @Metadata({ data: "json, name=dateValue" })
  dateValue?: GoogleTypeDate;

  @Metadata({ data: "json, name=dayOfWeekValue" })
  dayOfWeekValue?: GooglePrivacyDlpV2ValueDayOfWeekValueEnum;

  @Metadata({ data: "json, name=floatValue" })
  floatValue?: number;

  @Metadata({ data: "json, name=integerValue" })
  integerValue?: string;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;

  @Metadata({ data: "json, name=timeValue" })
  timeValue?: GoogleTypeTimeOfDay;

  @Metadata({ data: "json, name=timestampValue" })
  timestampValue?: string;
}
