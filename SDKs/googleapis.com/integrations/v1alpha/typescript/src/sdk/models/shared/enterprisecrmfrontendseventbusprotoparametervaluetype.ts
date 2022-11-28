import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=booleanArray" })
  booleanArray?: EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray;

  @SpeakeasyMetadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=doubleArray" })
  doubleArray?: EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray;

  @SpeakeasyMetadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @SpeakeasyMetadata({ data: "json, name=intArray" })
  intArray?: EnterpriseCrmFrontendsEventbusProtoIntParameterArray;

  @SpeakeasyMetadata({ data: "json, name=intValue" })
  intValue?: string;

  @SpeakeasyMetadata({ data: "json, name=jsonValue" })
  jsonValue?: string;

  @SpeakeasyMetadata({ data: "json, name=protoArray" })
  protoArray?: EnterpriseCrmFrontendsEventbusProtoProtoParameterArray;

  @SpeakeasyMetadata({ data: "json, name=protoValue" })
  protoValue?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=serializedObjectValue" })
  serializedObjectValue?: EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter;

  @SpeakeasyMetadata({ data: "json, name=stringArray" })
  stringArray?: EnterpriseCrmFrontendsEventbusProtoStringParameterArray;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
