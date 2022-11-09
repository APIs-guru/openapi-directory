import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnterpriseCrmEventbusProtoDoubleArray } from "./enterprisecrmeventbusprotodoublearray";
import { EnterpriseCrmEventbusProtoIntArray } from "./enterprisecrmeventbusprotointarray";
import { EnterpriseCrmEventbusProtoStringArray } from "./enterprisecrmeventbusprotostringarray";


// EnterpriseCrmEventbusProtoValueType
/** 
 * Used for define type for values. Currently supported value types include int, string, double, array, and any proto message.
**/
export class EnterpriseCrmEventbusProtoValueType extends SpeakeasyBase {
  @Metadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @Metadata({ data: "json, name=doubleArray" })
  doubleArray?: EnterpriseCrmEventbusProtoDoubleArray;

  @Metadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @Metadata({ data: "json, name=intArray" })
  intArray?: EnterpriseCrmEventbusProtoIntArray;

  @Metadata({ data: "json, name=intValue" })
  intValue?: string;

  @Metadata({ data: "json, name=protoValue" })
  protoValue?: Map<string, any>;

  @Metadata({ data: "json, name=stringArray" })
  stringArray?: EnterpriseCrmEventbusProtoStringArray;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
