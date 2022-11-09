import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimedCount
/** 
 * The number of errors in a given time period. All numbers are approximate since the error events are sampled before counting them.
**/
export class TimedCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
