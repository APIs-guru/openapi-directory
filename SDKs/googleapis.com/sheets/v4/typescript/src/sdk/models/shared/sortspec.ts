import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { DataSourceColumnReference } from "./datasourcecolumnreference";


export enum SortSpecSortOrderEnum {
    SortOrderUnspecified = "SORT_ORDER_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}


// SortSpec
/** 
 * A sort order associated with a specific column or row.
**/
export class SortSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundColor" })
  backgroundColor?: Color;

  @SpeakeasyMetadata({ data: "json, name=backgroundColorStyle" })
  backgroundColorStyle?: ColorStyle;

  @SpeakeasyMetadata({ data: "json, name=dataSourceColumnReference" })
  dataSourceColumnReference?: DataSourceColumnReference;

  @SpeakeasyMetadata({ data: "json, name=dimensionIndex" })
  dimensionIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=foregroundColor" })
  foregroundColor?: Color;

  @SpeakeasyMetadata({ data: "json, name=foregroundColorStyle" })
  foregroundColorStyle?: ColorStyle;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: SortSpecSortOrderEnum;
}
