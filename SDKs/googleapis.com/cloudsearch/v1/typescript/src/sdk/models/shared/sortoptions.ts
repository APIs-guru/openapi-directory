import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SortOptionsSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}


export class SortOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operatorName" })
  operatorName?: string;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: SortOptionsSortOrderEnum;
}
