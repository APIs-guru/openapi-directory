import { SpeakeasyBase } from "../../../internal/utils";
import { CustomEvent } from "./customevent";
import { CustomEventError } from "./customeventerror";
/**
 * The original custom event that was inserted and whether there were any errors.
**/
export declare class CustomEventStatus extends SpeakeasyBase {
    customEvent?: CustomEvent;
    errors?: CustomEventError[];
    kind?: string;
}
