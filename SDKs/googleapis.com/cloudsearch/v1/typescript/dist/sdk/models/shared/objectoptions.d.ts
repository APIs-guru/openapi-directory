import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectDisplayOptions } from "./objectdisplayoptions";
import { FreshnessOptions } from "./freshnessoptions";
/**
 * The options for an object.
**/
export declare class ObjectOptions extends SpeakeasyBase {
    displayOptions?: ObjectDisplayOptions;
    freshnessOptions?: FreshnessOptions;
    suggestionFilteringOperators?: string[];
}
