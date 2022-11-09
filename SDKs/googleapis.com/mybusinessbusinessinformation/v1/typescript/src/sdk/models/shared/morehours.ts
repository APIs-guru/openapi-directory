import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TimePeriod } from "./timeperiod";


// MoreHours
/** 
 * The time periods during which a location is open for certain types of business.
**/
export class MoreHours extends SpeakeasyBase {
  @Metadata({ data: "json, name=hoursTypeId" })
  hoursTypeId?: string;

  @Metadata({ data: "json, name=periods", elemType: shared.TimePeriod })
  periods?: TimePeriod[];
}
