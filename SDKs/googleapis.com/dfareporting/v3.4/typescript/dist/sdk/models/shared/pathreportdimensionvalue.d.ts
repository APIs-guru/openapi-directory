import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PathReportDimensionValueMatchTypeEnum {
    Exact = "EXACT",
    BeginsWith = "BEGINS_WITH",
    Contains = "CONTAINS",
    WildcardExpression = "WILDCARD_EXPRESSION"
}
/**
 * Represents a PathReportDimensionValue resource.
**/
export declare class PathReportDimensionValue extends SpeakeasyBase {
    dimensionName?: string;
    ids?: string[];
    kind?: string;
    matchType?: PathReportDimensionValueMatchTypeEnum;
    values?: string[];
}
