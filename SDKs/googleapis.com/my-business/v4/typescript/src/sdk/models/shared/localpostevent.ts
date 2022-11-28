import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeInterval } from "./timeinterval";



// LocalPostEvent
/** 
 * All the information pertaining to an event featured in a local post.
**/
export class LocalPostEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: TimeInterval;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
