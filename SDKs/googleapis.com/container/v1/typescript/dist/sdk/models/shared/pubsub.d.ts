import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
/**
 * Pub/Sub specific notification config.
**/
export declare class PubSub extends SpeakeasyBase {
    enabled?: boolean;
    filter?: Filter;
    topic?: string;
}
