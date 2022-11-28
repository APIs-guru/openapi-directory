import { SpeakeasyBase } from "../../../internal/utils";
import { Annotation } from "./annotation";
import { MessageEvent } from "./messageevent";
/**
 * A time-stamped annotation or message event in the Span.
**/
export declare class TimeEvent extends SpeakeasyBase {
    annotation?: Annotation;
    messageEvent?: MessageEvent;
    time?: string;
}
