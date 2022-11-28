import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Annotation } from "./annotation";
import { MessageEvent } from "./messageevent";



// TimeEvent
/** 
 * A time-stamped annotation or message event in the Span.
**/
export class TimeEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotation" })
  annotation?: Annotation;

  @SpeakeasyMetadata({ data: "json, name=messageEvent" })
  messageEvent?: MessageEvent;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;
}
