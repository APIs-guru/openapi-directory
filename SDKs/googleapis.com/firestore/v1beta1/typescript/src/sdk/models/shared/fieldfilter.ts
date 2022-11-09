import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldReference } from "./fieldreference";
import { Value } from "./value";

export enum FieldFilterOpEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED"
,    LessThan = "LESS_THAN"
,    LessThanOrEqual = "LESS_THAN_OR_EQUAL"
,    GreaterThan = "GREATER_THAN"
,    GreaterThanOrEqual = "GREATER_THAN_OR_EQUAL"
,    Equal = "EQUAL"
,    NotEqual = "NOT_EQUAL"
,    ArrayContains = "ARRAY_CONTAINS"
,    In = "IN"
,    ArrayContainsAny = "ARRAY_CONTAINS_ANY"
,    NotIn = "NOT_IN"
}


// FieldFilter
/** 
 * A filter on a specific field.
**/
export class FieldFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=field" })
  field?: FieldReference;

  @Metadata({ data: "json, name=op" })
  op?: FieldFilterOpEnum;

  @Metadata({ data: "json, name=value" })
  value?: Value;
}
