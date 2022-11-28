import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { TimeOfDay } from "./timeofday";



// TimeInterval
/** 
 * An interval of time, inclusive. It must contain all fields to be valid.
**/
export class TimeInterval extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: TimeOfDay;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: TimeOfDay;
}
