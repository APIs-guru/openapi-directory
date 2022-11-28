import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimeRange
/** 
 * Information about time ranges.
**/
export class TimeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
