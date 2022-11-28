import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimeSpan
/** 
 * Start and end times for a build execution phase.
**/
export class TimeSpan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
