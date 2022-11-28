import { SpeakeasyBase } from "../../../internal/utils";
import { PlanNode } from "./plannode";
/**
 * Contains an ordered list of nodes appearing in the query plan.
**/
export declare class QueryPlan extends SpeakeasyBase {
    planNodes?: PlanNode[];
}
