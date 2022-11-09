import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeInterval } from "./timeinterval";


// LocalPostEvent
/** 
 * All the information pertaining to an event featured in a local post.
**/
export class LocalPostEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=schedule" })
  schedule?: TimeInterval;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
