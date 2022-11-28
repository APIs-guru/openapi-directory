import { SpeakeasyBase } from "../../../internal/utils";
import { PubsubMessage } from "./pubsubmessage";
/**
 * Request for the PublishBatch method.
**/
export declare class PublishBatchRequest extends SpeakeasyBase {
    messages?: PubsubMessage[];
    topic?: string;
}
