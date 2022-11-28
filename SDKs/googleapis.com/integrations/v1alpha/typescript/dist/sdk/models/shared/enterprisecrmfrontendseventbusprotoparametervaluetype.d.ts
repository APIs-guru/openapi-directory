import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray } from "./enterprisecrmfrontendseventbusprotobooleanparameterarray";
import { EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray } from "./enterprisecrmfrontendseventbusprotodoubleparameterarray";
import { EnterpriseCrmFrontendsEventbusProtoIntParameterArray } from "./enterprisecrmfrontendseventbusprotointparameterarray";
import { EnterpriseCrmFrontendsEventbusProtoProtoParameterArray } from "./enterprisecrmfrontendseventbusprotoprotoparameterarray";
import { EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter } from "./enterprisecrmfrontendseventbusprotoserializedobjectparameter";
import { EnterpriseCrmFrontendsEventbusProtoStringParameterArray } from "./enterprisecrmfrontendseventbusprotostringparameterarray";
/**
 * To support various types of parameter values. Next available id: 14
**/
export declare class EnterpriseCrmFrontendsEventbusProtoParameterValueType extends SpeakeasyBase {
    booleanArray?: EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray;
    booleanValue?: boolean;
    doubleArray?: EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray;
    doubleValue?: number;
    intArray?: EnterpriseCrmFrontendsEventbusProtoIntParameterArray;
    intValue?: string;
    jsonValue?: string;
    protoArray?: EnterpriseCrmFrontendsEventbusProtoProtoParameterArray;
    protoValue?: Map<string, any>;
    serializedObjectValue?: EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter;
    stringArray?: EnterpriseCrmFrontendsEventbusProtoStringParameterArray;
    stringValue?: string;
}
