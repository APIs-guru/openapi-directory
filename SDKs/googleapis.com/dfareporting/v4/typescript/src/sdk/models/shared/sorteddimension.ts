import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SortedDimensionSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}


// SortedDimension
/** 
 * Represents a sorted dimension.
**/
export class SortedDimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: SortedDimensionSortOrderEnum;
}
