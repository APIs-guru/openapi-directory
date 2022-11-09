import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimeRange
/** 
 * A range of time. Data will be pulled over the range as a half-open inverval (that is, [start_time, end_time)).
**/
export class TimeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
