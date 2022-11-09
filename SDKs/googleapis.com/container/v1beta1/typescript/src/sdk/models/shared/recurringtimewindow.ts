import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeWindow } from "./timewindow";


// RecurringTimeWindow
/** 
 * Represents an arbitrary window of time that recurs.
**/
export class RecurringTimeWindow extends SpeakeasyBase {
  @Metadata({ data: "json, name=recurrence" })
  recurrence?: string;

  @Metadata({ data: "json, name=window" })
  window?: TimeWindow;
}
