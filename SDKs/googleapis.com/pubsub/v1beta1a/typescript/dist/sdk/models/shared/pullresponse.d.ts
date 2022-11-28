import { SpeakeasyBase } from "../../../internal/utils";
import { PubsubEvent } from "./pubsubevent";
/**
 * Either a PubsubMessage or a truncation event. One of these two must be populated.
**/
export declare class PullResponse extends SpeakeasyBase {
    ackId?: string;
    pubsubEvent?: PubsubEvent;
}
