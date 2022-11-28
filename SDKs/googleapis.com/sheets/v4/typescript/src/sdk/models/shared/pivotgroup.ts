import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
import { PivotGroupLimit } from "./pivotgrouplimit";
import { PivotGroupRule } from "./pivotgrouprule";
import { PivotGroupSortValueBucket } from "./pivotgroupsortvaluebucket";
import { PivotGroupValueMetadata } from "./pivotgroupvaluemetadata";


export enum PivotGroupSortOrderEnum {
    SortOrderUnspecified = "SORT_ORDER_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}


// PivotGroup
/** 
 * A single grouping (either row or column) in a pivot table.
**/
export class PivotGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceColumnReference" })
  dataSourceColumnReference?: DataSourceColumnReference;

  @SpeakeasyMetadata({ data: "json, name=groupLimit" })
  groupLimit?: PivotGroupLimit;

  @SpeakeasyMetadata({ data: "json, name=groupRule" })
  groupRule?: PivotGroupRule;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=repeatHeadings" })
  repeatHeadings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showTotals" })
  showTotals?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: PivotGroupSortOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceColumnOffset" })
  sourceColumnOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=valueBucket" })
  valueBucket?: PivotGroupSortValueBucket;

  @SpeakeasyMetadata({ data: "json, name=valueMetadata", elemType: PivotGroupValueMetadata })
  valueMetadata?: PivotGroupValueMetadata[];
}
