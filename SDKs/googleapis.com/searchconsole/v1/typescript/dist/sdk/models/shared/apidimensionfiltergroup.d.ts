import { SpeakeasyBase } from "../../../internal/utils";
import { ApiDimensionFilter } from "./apidimensionfilter";
export declare enum ApiDimensionFilterGroupGroupTypeEnum {
    And = "AND"
}
/**
 * A set of dimension value filters to test against each row. Only rows that pass all filter groups will be returned. All results within a filter group are either AND'ed or OR'ed together, depending on the group type selected. All filter groups are AND'ed together.
**/
export declare class ApiDimensionFilterGroup extends SpeakeasyBase {
    filters?: ApiDimensionFilter[];
    groupType?: ApiDimensionFilterGroupGroupTypeEnum;
}
