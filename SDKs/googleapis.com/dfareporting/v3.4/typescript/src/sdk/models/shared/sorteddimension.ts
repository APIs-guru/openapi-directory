import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SortedDimensionSortOrderEnum {
    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}


// SortedDimension
/** 
 * Represents a sorted dimension.
**/
export class SortedDimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: SortedDimensionSortOrderEnum;
}
