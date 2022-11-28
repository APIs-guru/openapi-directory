import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ErrorValueTypeEnum {
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


// ErrorValue
/** 
 * An error in a cell.
**/
export class ErrorValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ErrorValueTypeEnum;
}
