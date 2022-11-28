import { SpeakeasyBase } from "../../../internal/utils";
import { DisjunctiveMatchStatement } from "./disjunctivematchstatement";
/**
 * Represents a DfaReporting channel grouping rule.
**/
export declare class ChannelGroupingRule extends SpeakeasyBase {
    disjunctiveMatchStatements?: DisjunctiveMatchStatement[];
    kind?: string;
    name?: string;
}
