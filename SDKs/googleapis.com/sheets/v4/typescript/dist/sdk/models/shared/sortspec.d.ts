import { SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
export declare enum SortSpecSortOrderEnum {
    SortOrderUnspecified = "SORT_ORDER_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * A sort order associated with a specific column or row.
**/
export declare class SortSpec extends SpeakeasyBase {
    backgroundColor?: Color;
    backgroundColorStyle?: ColorStyle;
    dataSourceColumnReference?: DataSourceColumnReference;
    dimensionIndex?: number;
    foregroundColor?: Color;
    foregroundColorStyle?: ColorStyle;
    sortOrder?: SortSpecSortOrderEnum;
}
