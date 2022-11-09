import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Pub/Sub target. The job will be delivered by publishing a message to the given Pub/Sub topic.
**/
export declare class PubsubTarget extends SpeakeasyBase {
    attributes?: Map<string, string>;
    data?: string;
    topicName?: string;
}
