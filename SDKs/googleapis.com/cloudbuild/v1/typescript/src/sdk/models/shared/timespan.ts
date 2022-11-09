import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimeSpan
/** 
 * Start and end times for a build execution phase.
**/
export class TimeSpan extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
