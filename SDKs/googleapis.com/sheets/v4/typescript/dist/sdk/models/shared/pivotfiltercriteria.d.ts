import { SpeakeasyBase } from "../../../internal/utils";
import { BooleanCondition } from "./booleancondition";
/**
 * Criteria for showing/hiding rows in a pivot table.
**/
export declare class PivotFilterCriteria extends SpeakeasyBase {
    condition?: BooleanCondition;
    visibleByDefault?: boolean;
    visibleValues?: string[];
}
