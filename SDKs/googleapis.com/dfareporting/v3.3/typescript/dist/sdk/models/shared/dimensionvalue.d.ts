import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DimensionValueMatchTypeEnum {
    Exact = "EXACT",
    BeginsWith = "BEGINS_WITH",
    Contains = "CONTAINS",
    WildcardExpression = "WILDCARD_EXPRESSION"
}
/**
 * Represents a DimensionValue resource.
**/
export declare class DimensionValue extends SpeakeasyBase {
    dimensionName?: string;
    etag?: string;
    id?: string;
    kind?: string;
    matchType?: DimensionValueMatchTypeEnum;
    value?: string;
}
