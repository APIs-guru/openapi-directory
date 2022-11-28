import { SpeakeasyBase } from "../../../internal/utils";
import { Editors } from "./editors";
import { GridRange } from "./gridrange";
/**
 * A protected range.
**/
export declare class ProtectedRange extends SpeakeasyBase {
    description?: string;
    editors?: Editors;
    namedRangeId?: string;
    protectedRangeId?: number;
    range?: GridRange;
    requestingUserCanEdit?: boolean;
    unprotectedRanges?: GridRange[];
    warningOnly?: boolean;
}
