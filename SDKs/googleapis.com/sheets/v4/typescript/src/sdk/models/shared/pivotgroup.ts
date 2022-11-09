import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
import { PivotGroupLimit } from "./pivotgrouplimit";
import { PivotGroupRule } from "./pivotgrouprule";
import { PivotGroupSortValueBucket } from "./pivotgroupsortvaluebucket";
import { PivotGroupValueMetadata } from "./pivotgroupvaluemetadata";

export enum PivotGroupSortOrderEnum {
    SortOrderUnspecified = "SORT_ORDER_UNSPECIFIED"
,    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}


// PivotGroup
/** 
 * A single grouping (either row or column) in a pivot table.
**/
export class PivotGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSourceColumnReference" })
  dataSourceColumnReference?: DataSourceColumnReference;

  @Metadata({ data: "json, name=groupLimit" })
  groupLimit?: PivotGroupLimit;

  @Metadata({ data: "json, name=groupRule" })
  groupRule?: PivotGroupRule;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=repeatHeadings" })
  repeatHeadings?: boolean;

  @Metadata({ data: "json, name=showTotals" })
  showTotals?: boolean;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: PivotGroupSortOrderEnum;

  @Metadata({ data: "json, name=sourceColumnOffset" })
  sourceColumnOffset?: number;

  @Metadata({ data: "json, name=valueBucket" })
  valueBucket?: PivotGroupSortValueBucket;

  @Metadata({ data: "json, name=valueMetadata", elemType: shared.PivotGroupValueMetadata })
  valueMetadata?: PivotGroupValueMetadata[];
}
