import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";

export enum SortSpecSortOrderEnum {
    SortOrderUnspecified = "SORT_ORDER_UNSPECIFIED"
,    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}


// SortSpec
/** 
 * A sort order associated with a specific column or row.
**/
export class SortSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=backgroundColor" })
  backgroundColor?: Color;

  @Metadata({ data: "json, name=backgroundColorStyle" })
  backgroundColorStyle?: ColorStyle;

  @Metadata({ data: "json, name=dataSourceColumnReference" })
  dataSourceColumnReference?: DataSourceColumnReference;

  @Metadata({ data: "json, name=dimensionIndex" })
  dimensionIndex?: number;

  @Metadata({ data: "json, name=foregroundColor" })
  foregroundColor?: Color;

  @Metadata({ data: "json, name=foregroundColorStyle" })
  foregroundColorStyle?: ColorStyle;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: SortSpecSortOrderEnum;
}
