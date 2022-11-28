import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
import { PivotGroupLimit } from "./pivotgrouplimit";
import { PivotGroupRule } from "./pivotgrouprule";
import { PivotGroupSortValueBucket } from "./pivotgroupsortvaluebucket";
import { PivotGroupValueMetadata } from "./pivotgroupvaluemetadata";
export declare enum PivotGroupSortOrderEnum {
    SortOrderUnspecified = "SORT_ORDER_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * A single grouping (either row or column) in a pivot table.
**/
export declare class PivotGroup extends SpeakeasyBase {
    dataSourceColumnReference?: DataSourceColumnReference;
    groupLimit?: PivotGroupLimit;
    groupRule?: PivotGroupRule;
    label?: string;
    repeatHeadings?: boolean;
    showTotals?: boolean;
    sortOrder?: PivotGroupSortOrderEnum;
    sourceColumnOffset?: number;
    valueBucket?: PivotGroupSortValueBucket;
    valueMetadata?: PivotGroupValueMetadata[];
}
