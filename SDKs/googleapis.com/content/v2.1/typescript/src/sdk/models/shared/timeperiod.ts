import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimePeriod
/** 
 * A message that represents a time period.
**/
export class TimePeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
