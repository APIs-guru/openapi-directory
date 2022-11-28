import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Position } from "./position";



// StackTraceElement
/** 
 * A single stack element (frame) where an error occurred.
**/
export class StackTraceElement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: Position;

  @SpeakeasyMetadata({ data: "json, name=routine" })
  routine?: string;

  @SpeakeasyMetadata({ data: "json, name=step" })
  step?: string;
}
