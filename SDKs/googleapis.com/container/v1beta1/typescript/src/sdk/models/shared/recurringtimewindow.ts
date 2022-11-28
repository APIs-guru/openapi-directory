import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeWindow } from "./timewindow";



// RecurringTimeWindow
/** 
 * Represents an arbitrary window of time that recurs.
**/
export class RecurringTimeWindow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recurrence" })
  recurrence?: string;

  @SpeakeasyMetadata({ data: "json, name=window" })
  window?: TimeWindow;
}
