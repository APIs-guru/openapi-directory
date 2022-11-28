import { SpeakeasyBase } from "../../../internal/utils";
import { FieldReference } from "./fieldreference";
import { Value } from "./value";
export declare enum FieldFilterOpEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    LessThan = "LESS_THAN",
    LessThanOrEqual = "LESS_THAN_OR_EQUAL",
    GreaterThan = "GREATER_THAN",
    GreaterThanOrEqual = "GREATER_THAN_OR_EQUAL",
    Equal = "EQUAL",
    NotEqual = "NOT_EQUAL",
    ArrayContains = "ARRAY_CONTAINS",
    In = "IN",
    ArrayContainsAny = "ARRAY_CONTAINS_ANY",
    NotIn = "NOT_IN"
}
/**
 * A filter on a specific field.
**/
export declare class FieldFilter extends SpeakeasyBase {
    field?: FieldReference;
    op?: FieldFilterOpEnum;
    value?: Value;
}
