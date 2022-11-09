import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PubsubMessage } from "./pubsubmessage";
/**
 * An event indicating a received message or truncation event.
**/
export declare class PubsubEvent extends SpeakeasyBase {
    deleted?: boolean;
    message?: PubsubMessage;
    subscription?: string;
    truncated?: boolean;
}
