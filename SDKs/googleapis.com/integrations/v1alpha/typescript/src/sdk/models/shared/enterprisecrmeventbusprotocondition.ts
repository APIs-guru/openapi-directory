import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoValueType } from "./enterprisecrmeventbusprotovaluetype";


export enum EnterpriseCrmEventbusProtoConditionOperatorEnum {
    Unset = "UNSET",
    Equals = "EQUALS",
    Contains = "CONTAINS",
    LessThan = "LESS_THAN",
    GreaterThan = "GREATER_THAN",
    Exists = "EXISTS",
    DoesNotExist = "DOES_NOT_EXIST",
    IsEmpty = "IS_EMPTY",
    IsNotEmpty = "IS_NOT_EMPTY"
}


// EnterpriseCrmEventbusProtoCondition
/** 
 * Condition that uses `operator` to evaluate the key against the value.
**/
export class EnterpriseCrmEventbusProtoCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventPropertyKey" })
  eventPropertyKey?: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: EnterpriseCrmEventbusProtoConditionOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: EnterpriseCrmEventbusProtoValueType;
}
