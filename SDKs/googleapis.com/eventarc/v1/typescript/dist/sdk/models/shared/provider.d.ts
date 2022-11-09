import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EventType } from "./eventtype";
/**
 * A representation of the Provider resource.
**/
export declare class Provider extends SpeakeasyBase {
    displayName?: string;
    eventTypes?: EventType[];
    name?: string;
}
