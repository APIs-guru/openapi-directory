import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimedCount
/** 
 * The number of errors in a given time period. All numbers are approximate since the error events are sampled before counting them.
**/
export class TimedCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
