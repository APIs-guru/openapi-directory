import { SpeakeasyBase } from "../../../internal/utils";
import { HttpRule } from "./httprule";
/**
 * Defines the HTTP configuration for an API service. It contains a list of HttpRule, each specifying the mapping of an RPC method to one or more HTTP REST API methods.
**/
export declare class Http extends SpeakeasyBase {
    fullyDecodeReservedExpansion?: boolean;
    rules?: HttpRule[];
}
