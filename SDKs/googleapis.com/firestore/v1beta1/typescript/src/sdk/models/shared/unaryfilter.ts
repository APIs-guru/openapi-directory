import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldReference } from "./fieldreference";

export enum UnaryFilterOpEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED"
,    IsNan = "IS_NAN"
,    IsNull = "IS_NULL"
,    IsNotNan = "IS_NOT_NAN"
,    IsNotNull = "IS_NOT_NULL"
}


// UnaryFilter
/** 
 * A filter with a single operand.
**/
export class UnaryFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=field" })
  field?: FieldReference;

  @Metadata({ data: "json, name=op" })
  op?: UnaryFilterOpEnum;
}
