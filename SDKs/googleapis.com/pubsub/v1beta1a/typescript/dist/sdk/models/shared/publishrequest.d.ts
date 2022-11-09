import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PubsubMessage } from "./pubsubmessage";
/**
 * Request for the Publish method.
**/
export declare class PublishRequest extends SpeakeasyBase {
    message?: PubsubMessage;
    topic?: string;
}
