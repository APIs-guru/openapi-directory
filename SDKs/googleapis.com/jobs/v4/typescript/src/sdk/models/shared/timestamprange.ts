import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimestampRange
/** 
 * Message representing a period of time between two timestamps.
**/
export class TimestampRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
