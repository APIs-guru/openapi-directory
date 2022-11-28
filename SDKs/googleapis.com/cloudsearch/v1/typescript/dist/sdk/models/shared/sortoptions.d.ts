import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SortOptionsSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class SortOptions extends SpeakeasyBase {
    operatorName?: string;
    sortOrder?: SortOptionsSortOrderEnum;
}
