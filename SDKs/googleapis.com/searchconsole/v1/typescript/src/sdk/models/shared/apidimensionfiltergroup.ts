import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiDimensionFilter } from "./apidimensionfilter";

export enum ApiDimensionFilterGroupGroupTypeEnum {
    And = "AND"
}


// ApiDimensionFilterGroup
/** 
 * A set of dimension value filters to test against each row. Only rows that pass all filter groups will be returned. All results within a filter group are either AND'ed or OR'ed together, depending on the group type selected. All filter groups are AND'ed together.
**/
export class ApiDimensionFilterGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.ApiDimensionFilter })
  filters?: ApiDimensionFilter[];

  @Metadata({ data: "json, name=groupType" })
  groupType?: ApiDimensionFilterGroupGroupTypeEnum;
}
