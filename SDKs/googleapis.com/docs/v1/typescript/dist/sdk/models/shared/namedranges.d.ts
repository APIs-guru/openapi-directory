import { SpeakeasyBase } from "../../../internal/utils";
import { NamedRange } from "./namedrange";
/**
 * A collection of all the NamedRanges in the document that share a given name.
**/
export declare class NamedRanges extends SpeakeasyBase {
    name?: string;
    namedRanges?: NamedRange[];
}
