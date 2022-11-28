import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimePeriod } from "./timeperiod";



// BusinessHours
/** 
 * Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances.
**/
export class BusinessHours extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=periods", elemType: TimePeriod })
  periods?: TimePeriod[];
}
