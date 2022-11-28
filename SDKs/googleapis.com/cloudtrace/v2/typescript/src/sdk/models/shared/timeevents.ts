import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeEvent } from "./timeevent";



// TimeEvents
/** 
 * A collection of `TimeEvent`s. A `TimeEvent` is a time-stamped annotation on the span, consisting of either user-supplied key:value pairs, or details of a message sent/received between Spans.
**/
export class TimeEvents extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=droppedAnnotationsCount" })
  droppedAnnotationsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=droppedMessageEventsCount" })
  droppedMessageEventsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=timeEvent", elemType: TimeEvent })
  timeEvent?: TimeEvent[];
}
