import { SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";
/**
 * A named range.
**/
export declare class NamedRange extends SpeakeasyBase {
    name?: string;
    namedRangeId?: string;
    range?: GridRange;
}
