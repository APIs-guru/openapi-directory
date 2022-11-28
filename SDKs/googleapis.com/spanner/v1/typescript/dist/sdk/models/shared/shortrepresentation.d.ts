import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Condensed representation of a node and its subtree. Only present for `SCALAR` PlanNode(s).
**/
export declare class ShortRepresentation extends SpeakeasyBase {
    description?: string;
    subqueries?: Map<string, number>;
}
