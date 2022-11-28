import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimeRange
/** 
 * A range of time. Data will be pulled over the range as a half-open inverval (that is, [start_time, end_time)).
**/
export class TimeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
