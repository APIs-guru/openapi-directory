import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ErrorValueTypeEnum {
    ErrorTypeUnspecified = "ERROR_TYPE_UNSPECIFIED",
    Error = "ERROR",
    NullValue = "NULL_VALUE",
    DivideByZero = "DIVIDE_BY_ZERO",
    Value = "VALUE",
    Ref = "REF",
    Name = "NAME",
    Num = "NUM",
    NA = "N_A",
    Loading = "LOADING"
}
/**
 * An error in a cell.
**/
export declare class ErrorValue extends SpeakeasyBase {
    message?: string;
    type?: ErrorValueTypeEnum;
}
