import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimestampRange
/** 
 * Message representing a period of time between two timestamps.
**/
export class TimestampRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
