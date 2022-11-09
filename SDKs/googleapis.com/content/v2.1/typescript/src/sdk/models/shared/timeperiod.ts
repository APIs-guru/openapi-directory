import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimePeriod
/** 
 * A message that represents a time period.
**/
export class TimePeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
