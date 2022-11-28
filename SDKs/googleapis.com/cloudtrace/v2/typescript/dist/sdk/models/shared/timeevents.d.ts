import { SpeakeasyBase } from "../../../internal/utils";
import { TimeEvent } from "./timeevent";
/**
 * A collection of `TimeEvent`s. A `TimeEvent` is a time-stamped annotation on the span, consisting of either user-supplied key:value pairs, or details of a message sent/received between Spans.
**/
export declare class TimeEvents extends SpeakeasyBase {
    droppedAnnotationsCount?: number;
    droppedMessageEventsCount?: number;
    timeEvent?: TimeEvent[];
}
