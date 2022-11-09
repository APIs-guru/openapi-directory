import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=booleanArray" })
  booleanArray?: EnterpriseCrmEventbusProtoBooleanParameterArray;

  @Metadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @Metadata({ data: "json, name=doubleArray" })
  doubleArray?: EnterpriseCrmEventbusProtoDoubleParameterArray;

  @Metadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @Metadata({ data: "json, name=intArray" })
  intArray?: EnterpriseCrmEventbusProtoIntParameterArray;

  @Metadata({ data: "json, name=intValue" })
  intValue?: string;

  @Metadata({ data: "json, name=protoArray" })
  protoArray?: EnterpriseCrmEventbusProtoProtoParameterArray;

  @Metadata({ data: "json, name=protoValue" })
  protoValue?: Map<string, any>;

  @Metadata({ data: "json, name=serializedObjectValue" })
  serializedObjectValue?: EnterpriseCrmEventbusProtoSerializedObjectParameter;

  @Metadata({ data: "json, name=stringArray" })
  stringArray?: EnterpriseCrmEventbusProtoStringParameterArray;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
