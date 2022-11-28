import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SpecialHourPeriod } from "./specialhourperiod";



// SpecialHours
/** 
 * Represents a set of time periods when a location's operational hours differ from its normal business hours.
**/
export class SpecialHours extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=specialHourPeriods", elemType: SpecialHourPeriod })
  specialHourPeriods?: SpecialHourPeriod[];
}
