import { SpeakeasyBase } from "../../../internal/utils";
import { PubsubMessage } from "./pubsubmessage";
/**
 * Request for the TriggerPubsubExecution method.
**/
export declare class TriggerPubsubExecutionRequest extends SpeakeasyBase {
    gcpCloudEventsMode?: string;
    message?: PubsubMessage;
    subscription?: string;
}
