import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SortOptionsSortOrderEnum {
    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}


export class SortOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=operatorName" })
  operatorName?: string;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: SortOptionsSortOrderEnum;
}
