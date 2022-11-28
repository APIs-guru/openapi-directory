import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
export declare enum CompositeFilterLogicOperatorEnum {
    And = "AND",
    Or = "OR",
    Not = "NOT"
}
export declare class CompositeFilter extends SpeakeasyBase {
    logicOperator?: CompositeFilterLogicOperatorEnum;
    subFilters?: Filter[];
}
