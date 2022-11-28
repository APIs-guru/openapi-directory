import { SpeakeasyBase } from "../../../internal/utils";
import { LocationIdSet } from "./locationidset";
import { Price } from "./price";
import { Weight } from "./weight";
/**
 * A non-empty list of row or column headers for a table. Exactly one of `prices`, `weights`, `numItems`, `postalCodeGroupNames`, or `location` must be set.
**/
export declare class Headers extends SpeakeasyBase {
    locations?: LocationIdSet[];
    numberOfItems?: string[];
    postalCodeGroupNames?: string[];
    prices?: Price[];
    weights?: Weight[];
}
