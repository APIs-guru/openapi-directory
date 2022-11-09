import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Annotation } from "./annotation";
import { MessageEvent } from "./messageevent";


// TimeEvent
/** 
 * A time-stamped annotation or message event in the Span.
**/
export class TimeEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotation" })
  annotation?: Annotation;

  @Metadata({ data: "json, name=messageEvent" })
  messageEvent?: MessageEvent;

  @Metadata({ data: "json, name=time" })
  time?: string;
}
