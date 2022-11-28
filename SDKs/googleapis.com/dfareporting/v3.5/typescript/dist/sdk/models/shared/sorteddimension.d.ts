import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SortedDimensionSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * Represents a sorted dimension.
**/
export declare class SortedDimension extends SpeakeasyBase {
    kind?: string;
    name?: string;
    sortOrder?: SortedDimensionSortOrderEnum;
}
