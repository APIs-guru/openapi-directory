import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Date } from "./date";
import { TimeOfDay } from "./timeofday";
import { Date } from "./date";
import { TimeOfDay } from "./timeofday";


// TimeInterval
/** 
 * An interval of time, inclusive. It must contain all fields to be valid.
**/
export class TimeInterval extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=endTime" })
  endTime?: TimeOfDay;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=startTime" })
  startTime?: TimeOfDay;
}
