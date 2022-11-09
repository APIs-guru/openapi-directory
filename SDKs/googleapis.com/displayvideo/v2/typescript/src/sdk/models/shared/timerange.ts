import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimeRange
/** 
 * A time range.
**/
export class TimeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
