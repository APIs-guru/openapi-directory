import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimePeriod } from "./timeperiod";



// MoreHours
/** 
 * The time periods during which a location is open for certain types of business.
**/
export class MoreHours extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hoursTypeId" })
  hoursTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=periods", elemType: TimePeriod })
  periods?: TimePeriod[];
}
