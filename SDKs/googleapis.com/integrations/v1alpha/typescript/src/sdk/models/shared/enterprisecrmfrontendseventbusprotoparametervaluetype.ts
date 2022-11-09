import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray } from "./enterprisecrmfrontendseventbusprotobooleanparameterarray";
import { EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray } from "./enterprisecrmfrontendseventbusprotodoubleparameterarray";
import { EnterpriseCrmFrontendsEventbusProtoIntParameterArray } from "./enterprisecrmfrontendseventbusprotointparameterarray";
import { EnterpriseCrmFrontendsEventbusProtoProtoParameterArray } from "./enterprisecrmfrontendseventbusprotoprotoparameterarray";
import { EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter } from "./enterprisecrmfrontendseventbusprotoserializedobjectparameter";
import { EnterpriseCrmFrontendsEventbusProtoStringParameterArray } from "./enterprisecrmfrontendseventbusprotostringparameterarray";


// EnterpriseCrmFrontendsEventbusProtoParameterValueType
/** 
 * To support various types of parameter values. Next available id: 14
**/
export class EnterpriseCrmFrontendsEventbusProtoParameterValueType extends SpeakeasyBase {
  @Metadata({ data: "json, name=booleanArray" })
  booleanArray?: EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray;

  @Metadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @Metadata({ data: "json, name=doubleArray" })
  doubleArray?: EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray;

  @Metadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @Metadata({ data: "json, name=intArray" })
  intArray?: EnterpriseCrmFrontendsEventbusProtoIntParameterArray;

  @Metadata({ data: "json, name=intValue" })
  intValue?: string;

  @Metadata({ data: "json, name=jsonValue" })
  jsonValue?: string;

  @Metadata({ data: "json, name=protoArray" })
  protoArray?: EnterpriseCrmFrontendsEventbusProtoProtoParameterArray;

  @Metadata({ data: "json, name=protoValue" })
  protoValue?: Map<string, any>;

  @Metadata({ data: "json, name=serializedObjectValue" })
  serializedObjectValue?: EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter;

  @Metadata({ data: "json, name=stringArray" })
  stringArray?: EnterpriseCrmFrontendsEventbusProtoStringParameterArray;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
