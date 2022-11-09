import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TimeEvent } from "./timeevent";


// TimeEvents
/** 
 * A collection of `TimeEvent`s. A `TimeEvent` is a time-stamped annotation on the span, consisting of either user-supplied key:value pairs, or details of a message sent/received between Spans.
**/
export class TimeEvents extends SpeakeasyBase {
  @Metadata({ data: "json, name=droppedAnnotationsCount" })
  droppedAnnotationsCount?: number;

  @Metadata({ data: "json, name=droppedMessageEventsCount" })
  droppedMessageEventsCount?: number;

  @Metadata({ data: "json, name=timeEvent", elemType: shared.TimeEvent })
  timeEvent?: TimeEvent[];
}
