import { SpeakeasyBase } from "../../../internal/utils";
import { PubsubInput } from "./pubsub";
import { Pubsub } from "./pubsub";
/**
 * Represents the transport intermediaries created for the trigger to deliver events.
**/
export declare class TransportInput extends SpeakeasyBase {
    pubsub?: PubsubInput;
}
/**
 * Represents the transport intermediaries created for the trigger to deliver events.
**/
export declare class Transport extends SpeakeasyBase {
    pubsub?: Pubsub;
}
