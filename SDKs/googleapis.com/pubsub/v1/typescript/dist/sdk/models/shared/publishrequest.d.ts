import { SpeakeasyBase } from "../../../internal/utils";
import { PubsubMessage } from "./pubsubmessage";
/**
 * Request for the Publish method.
**/
export declare class PublishRequest extends SpeakeasyBase {
    messages?: PubsubMessage[];
}
