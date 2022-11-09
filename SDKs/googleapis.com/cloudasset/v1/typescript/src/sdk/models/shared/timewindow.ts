import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimeWindow
/** 
 * A time window specified by its `start_time` and `end_time`.
**/
export class TimeWindow extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
