import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SpecialHourPeriod } from "./specialhourperiod";


// SpecialHours
/** 
 * Represents a set of time periods when a location's operational hours differ from its normal business hours.
**/
export class SpecialHours extends SpeakeasyBase {
  @Metadata({ data: "json, name=specialHourPeriods", elemType: shared.SpecialHourPeriod })
  specialHourPeriods?: SpecialHourPeriod[];
}
