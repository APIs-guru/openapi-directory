import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PathQueryOptionsFilterMatchEnum {
    Unknown = "UNKNOWN",
    Exact = "EXACT",
    Partial = "PARTIAL",
    BeginsWith = "BEGINS_WITH",
    WildcardExpression = "WILDCARD_EXPRESSION"
}
/**
 * Dimension filter on path events.
**/
export declare class PathQueryOptionsFilter extends SpeakeasyBase {
    filter?: string;
    match?: PathQueryOptionsFilterMatchEnum;
    values?: string[];
}
