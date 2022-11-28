import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldReference } from "./fieldreference";


export enum UnaryFilterOpEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    IsNan = "IS_NAN",
    IsNull = "IS_NULL",
    IsNotNan = "IS_NOT_NAN",
    IsNotNull = "IS_NOT_NULL"
}


// UnaryFilter
/** 
 * A filter with a single operand.
**/
export class UnaryFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: FieldReference;

  @SpeakeasyMetadata({ data: "json, name=op" })
  op?: UnaryFilterOpEnum;
}
