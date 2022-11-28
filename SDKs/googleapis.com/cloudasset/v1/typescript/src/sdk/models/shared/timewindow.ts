import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimeWindow
/** 
 * A time window specified by its `start_time` and `end_time`.
**/
export class TimeWindow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
