import { SpeakeasyBase } from "../../../internal/utils";
import { FieldReference } from "./fieldreference";
export declare enum UnaryFilterOpEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    IsNan = "IS_NAN",
    IsNull = "IS_NULL",
    IsNotNan = "IS_NOT_NAN",
    IsNotNull = "IS_NOT_NULL"
}
/**
 * A filter with a single operand.
**/
export declare class UnaryFilter extends SpeakeasyBase {
    field?: FieldReference;
    op?: UnaryFilterOpEnum;
}
