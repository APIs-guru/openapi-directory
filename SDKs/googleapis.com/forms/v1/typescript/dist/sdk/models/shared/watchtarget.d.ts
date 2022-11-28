import { SpeakeasyBase } from "../../../internal/utils";
import { CloudPubsubTopic } from "./cloudpubsubtopic";
/**
 * The target for notification delivery.
**/
export declare class WatchTarget extends SpeakeasyBase {
    topic?: CloudPubsubTopic;
}
