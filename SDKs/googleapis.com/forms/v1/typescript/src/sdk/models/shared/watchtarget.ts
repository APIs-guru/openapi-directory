import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudPubsubTopic } from "./cloudpubsubtopic";



// WatchTarget
/** 
 * The target for notification delivery.
**/
export class WatchTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: CloudPubsubTopic;
}
