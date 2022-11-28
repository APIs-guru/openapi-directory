import { SpeakeasyBase } from "../../../internal/utils";
import { CustomEvent } from "./customevent";
/**
 * Insert Custom Events Request.
**/
export declare class CustomEventsBatchInsertRequest extends SpeakeasyBase {
    customEvents?: CustomEvent[];
    kind?: string;
}
