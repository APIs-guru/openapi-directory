import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoValueType } from "./enterprisecrmeventbusprotovaluetype";
export declare enum EnterpriseCrmEventbusProtoConditionOperatorEnum {
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
/**
 * Condition that uses `operator` to evaluate the key against the value.
**/
export declare class EnterpriseCrmEventbusProtoCondition extends SpeakeasyBase {
    eventPropertyKey?: string;
    operator?: EnterpriseCrmEventbusProtoConditionOperatorEnum;
    value?: EnterpriseCrmEventbusProtoValueType;
}
