import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnterpriseCrmEventbusProtoValueType } from "./enterprisecrmeventbusprotovaluetype";

export enum EnterpriseCrmEventbusProtoConditionOperatorEnum {
    Unset = "UNSET"
,    Equals = "EQUALS"
,    Contains = "CONTAINS"
,    LessThan = "LESS_THAN"
,    GreaterThan = "GREATER_THAN"
,    Exists = "EXISTS"
,    DoesNotExist = "DOES_NOT_EXIST"
,    IsEmpty = "IS_EMPTY"
,    IsNotEmpty = "IS_NOT_EMPTY"
}


// EnterpriseCrmEventbusProtoCondition
/** 
 * Condition that uses `operator` to evaluate the key against the value.
**/
export class EnterpriseCrmEventbusProtoCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventPropertyKey" })
  eventPropertyKey?: string;

  @Metadata({ data: "json, name=operator" })
  operator?: EnterpriseCrmEventbusProtoConditionOperatorEnum;

  @Metadata({ data: "json, name=value" })
  value?: EnterpriseCrmEventbusProtoValueType;
}
