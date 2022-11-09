import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudPubsubTopic } from "./cloudpubsubtopic";


// WatchTarget
/** 
 * The target for notification delivery.
**/
export class WatchTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=topic" })
  topic?: CloudPubsubTopic;
}
