import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";


export enum CompositeFilterOpEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    And = "AND"
}


// CompositeFilter
/** 
 * A filter that merges multiple other filters using the given operator.
**/
export class CompositeFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: Filter })
  filters?: Filter[];

  @SpeakeasyMetadata({ data: "json, name=op" })
  op?: CompositeFilterOpEnum;
}
