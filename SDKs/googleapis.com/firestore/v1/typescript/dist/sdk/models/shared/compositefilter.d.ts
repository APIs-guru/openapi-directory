import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
export declare enum CompositeFilterOpEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    And = "AND"
}
/**
 * A filter that merges multiple other filters using the given operator.
**/
export declare class CompositeFilter extends SpeakeasyBase {
    filters?: Filter[];
    op?: CompositeFilterOpEnum;
}
