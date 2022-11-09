import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Filter } from "./filter";

export enum CompositeFilterLogicOperatorEnum {
    And = "AND"
,    Or = "OR"
,    Not = "NOT"
}


export class CompositeFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=logicOperator" })
  logicOperator?: CompositeFilterLogicOperatorEnum;

  @Metadata({ data: "json, name=subFilters", elemType: shared.Filter })
  subFilters?: Filter[];
}
