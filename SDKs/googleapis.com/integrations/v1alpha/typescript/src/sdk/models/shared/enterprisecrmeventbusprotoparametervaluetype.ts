import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoBooleanParameterArray } from "./enterprisecrmeventbusprotobooleanparameterarray";
import { EnterpriseCrmEventbusProtoDoubleParameterArray } from "./enterprisecrmeventbusprotodoubleparameterarray";
import { EnterpriseCrmEventbusProtoIntParameterArray } from "./enterprisecrmeventbusprotointparameterarray";
import { EnterpriseCrmEventbusProtoProtoParameterArray } from "./enterprisecrmeventbusprotoprotoparameterarray";
import { EnterpriseCrmEventbusProtoSerializedObjectParameter } from "./enterprisecrmeventbusprotoserializedobjectparameter";
import { EnterpriseCrmEventbusProtoStringParameterArray } from "./enterprisecrmeventbusprotostringparameterarray";



// EnterpriseCrmEventbusProtoParameterValueType
/** 
 * LINT.IfChange To support various types of parameter values. Next available id: 14
**/
export class EnterpriseCrmEventbusProtoParameterValueType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=booleanArray" })
  booleanArray?: EnterpriseCrmEventbusProtoBooleanParameterArray;

  @SpeakeasyMetadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=doubleArray" })
  doubleArray?: EnterpriseCrmEventbusProtoDoubleParameterArray;

  @SpeakeasyMetadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @SpeakeasyMetadata({ data: "json, name=intArray" })
  intArray?: EnterpriseCrmEventbusProtoIntParameterArray;

  @SpeakeasyMetadata({ data: "json, name=intValue" })
  intValue?: string;

  @SpeakeasyMetadata({ data: "json, name=protoArray" })
  protoArray?: EnterpriseCrmEventbusProtoProtoParameterArray;

  @SpeakeasyMetadata({ data: "json, name=protoValue" })
  protoValue?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=serializedObjectValue" })
  serializedObjectValue?: EnterpriseCrmEventbusProtoSerializedObjectParameter;

  @SpeakeasyMetadata({ data: "json, name=stringArray" })
  stringArray?: EnterpriseCrmEventbusProtoStringParameterArray;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
