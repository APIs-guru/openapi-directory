import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Date
/** 
 * Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999.
**/
export class Date extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=day" })
  day?: number;

  @SpeakeasyMetadata({ data: "json, name=month" })
  month?: number;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}
