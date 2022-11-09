import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimestampedEvent
/** 
 * An event that occured in the operation assigned to the worker and the time of occurance.
**/
export class TimestampedEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;
}
