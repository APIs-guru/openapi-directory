import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimestampedEvent
/** 
 * An event that occured in the operation assigned to the worker and the time of occurance.
**/
export class TimestampedEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;
}
