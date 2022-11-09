import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Position } from "./position";


// StackTraceElement
/** 
 * A single stack element (frame) where an error occurred.
**/
export class StackTraceElement extends SpeakeasyBase {
  @Metadata({ data: "json, name=position" })
  position?: Position;

  @Metadata({ data: "json, name=routine" })
  routine?: string;

  @Metadata({ data: "json, name=step" })
  step?: string;
}
