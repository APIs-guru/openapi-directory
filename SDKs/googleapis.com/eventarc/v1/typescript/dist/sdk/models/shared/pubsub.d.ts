import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a Pub/Sub transport.
**/
export declare class PubsubInput extends SpeakeasyBase {
    topic?: string;
}
/**
 * Represents a Pub/Sub transport.
**/
export declare class Pubsub extends SpeakeasyBase {
    subscription?: string;
    topic?: string;
}
