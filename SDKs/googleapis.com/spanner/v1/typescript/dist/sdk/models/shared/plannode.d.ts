import { SpeakeasyBase } from "../../../internal/utils";
import { ChildLink } from "./childlink";
import { ShortRepresentation } from "./shortrepresentation";
export declare enum PlanNodeKindEnum {
    KindUnspecified = "KIND_UNSPECIFIED",
    Relational = "RELATIONAL",
    Scalar = "SCALAR"
}
/**
 * Node information for nodes appearing in a QueryPlan.plan_nodes.
**/
export declare class PlanNode extends SpeakeasyBase {
    childLinks?: ChildLink[];
    displayName?: string;
    executionStats?: Map<string, any>;
    index?: number;
    kind?: PlanNodeKindEnum;
    metadata?: Map<string, any>;
    shortRepresentation?: ShortRepresentation;
}
