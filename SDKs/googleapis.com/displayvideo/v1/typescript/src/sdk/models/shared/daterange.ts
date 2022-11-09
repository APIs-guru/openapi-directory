import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Date } from "./date";
import { Date } from "./date";


// DateRange
/** 
 * A date range.
**/
export class DateRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;
}
