import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoBooleanParameterArray } from "./enterprisecrmeventbusprotobooleanparameterarray";
import { EnterpriseCrmEventbusProtoDoubleParameterArray } from "./enterprisecrmeventbusprotodoubleparameterarray";
import { EnterpriseCrmEventbusProtoIntParameterArray } from "./enterprisecrmeventbusprotointparameterarray";
import { EnterpriseCrmEventbusProtoProtoParameterArray } from "./enterprisecrmeventbusprotoprotoparameterarray";
import { EnterpriseCrmEventbusProtoSerializedObjectParameter } from "./enterprisecrmeventbusprotoserializedobjectparameter";
import { EnterpriseCrmEventbusProtoStringParameterArray } from "./enterprisecrmeventbusprotostringparameterarray";
/**
 * LINT.IfChange To support various types of parameter values. Next available id: 14
**/
export declare class EnterpriseCrmEventbusProtoParameterValueType extends SpeakeasyBase {
    booleanArray?: EnterpriseCrmEventbusProtoBooleanParameterArray;
    booleanValue?: boolean;
    doubleArray?: EnterpriseCrmEventbusProtoDoubleParameterArray;
    doubleValue?: number;
    intArray?: EnterpriseCrmEventbusProtoIntParameterArray;
    intValue?: string;
    protoArray?: EnterpriseCrmEventbusProtoProtoParameterArray;
    protoValue?: Map<string, any>;
    serializedObjectValue?: EnterpriseCrmEventbusProtoSerializedObjectParameter;
    stringArray?: EnterpriseCrmEventbusProtoStringParameterArray;
    stringValue?: string;
}
