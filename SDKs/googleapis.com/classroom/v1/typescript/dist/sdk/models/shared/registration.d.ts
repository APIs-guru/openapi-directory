import { SpeakeasyBase } from "../../../internal/utils";
import { CloudPubsubTopic } from "./cloudpubsubtopic";
import { Feed } from "./feed";
/**
 * An instruction to Classroom to send notifications from the `feed` to the provided destination.
**/
export declare class Registration extends SpeakeasyBase {
    cloudPubsubTopic?: CloudPubsubTopic;
    expiryTime?: string;
    feed?: Feed;
    registrationId?: string;
}
