import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";


export enum CompositeFilterLogicOperatorEnum {
    And = "AND",
    Or = "OR",
    Not = "NOT"
}


export class CompositeFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logicOperator" })
  logicOperator?: CompositeFilterLogicOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=subFilters", elemType: Filter })
  subFilters?: Filter[];
}
