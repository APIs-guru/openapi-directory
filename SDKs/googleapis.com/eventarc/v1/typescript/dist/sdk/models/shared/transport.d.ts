import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Pubsub } from "./pubsub";
/**
 * Represents the transport intermediaries created for the trigger to deliver events.
**/
export declare class Transport extends SpeakeasyBase {
    pubsub?: Pubsub;
}
