import { SpeakeasyBase } from "../../../internal/utils";
import { DebugOptions } from "./debugoptions";
/**
 * Shared request options for all RPC methods.
**/
export declare class RequestOptions extends SpeakeasyBase {
    debugOptions?: DebugOptions;
    languageCode?: string;
    searchApplicationId?: string;
    timeZone?: string;
}
