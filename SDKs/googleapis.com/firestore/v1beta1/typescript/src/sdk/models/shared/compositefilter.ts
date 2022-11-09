import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Filter } from "./filter";

export enum CompositeFilterOpEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED"
,    And = "AND"
}


// CompositeFilter
/** 
 * A filter that merges multiple other filters using the given operator.
**/
export class CompositeFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.Filter })
  filters?: Filter[];

  @Metadata({ data: "json, name=op" })
  op?: CompositeFilterOpEnum;
}
