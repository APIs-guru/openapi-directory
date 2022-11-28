import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FilterCriteriaSizeComparisonEnum {
    Unspecified = "unspecified",
    Smaller = "smaller",
    Larger = "larger"
}
/**
 * Message matching criteria.
**/
export declare class FilterCriteria extends SpeakeasyBase {
    excludeChats?: boolean;
    from?: string;
    hasAttachment?: boolean;
    negatedQuery?: string;
    query?: string;
    size?: number;
    sizeComparison?: FilterCriteriaSizeComparisonEnum;
    subject?: string;
    to?: string;
}
