import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiDimensionFilter } from "./apidimensionfilter";


export enum ApiDimensionFilterGroupGroupTypeEnum {
    And = "AND"
}


// ApiDimensionFilterGroup
/** 
 * A set of dimension value filters to test against each row. Only rows that pass all filter groups will be returned. All results within a filter group are either AND'ed or OR'ed together, depending on the group type selected. All filter groups are AND'ed together.
**/
export class ApiDimensionFilterGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: ApiDimensionFilter })
  filters?: ApiDimensionFilter[];

  @SpeakeasyMetadata({ data: "json, name=groupType" })
  groupType?: ApiDimensionFilterGroupGroupTypeEnum;
}
