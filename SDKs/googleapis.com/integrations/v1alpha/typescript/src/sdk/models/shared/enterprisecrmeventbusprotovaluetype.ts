import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoDoubleArray } from "./enterprisecrmeventbusprotodoublearray";
import { EnterpriseCrmEventbusProtoIntArray } from "./enterprisecrmeventbusprotointarray";
import { EnterpriseCrmEventbusProtoStringArray } from "./enterprisecrmeventbusprotostringarray";



// EnterpriseCrmEventbusProtoValueType
/** 
 * Used for define type for values. Currently supported value types include int, string, double, array, and any proto message.
**/
export class EnterpriseCrmEventbusProtoValueType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=doubleArray" })
  doubleArray?: EnterpriseCrmEventbusProtoDoubleArray;

  @SpeakeasyMetadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @SpeakeasyMetadata({ data: "json, name=intArray" })
  intArray?: EnterpriseCrmEventbusProtoIntArray;

  @SpeakeasyMetadata({ data: "json, name=intValue" })
  intValue?: string;

  @SpeakeasyMetadata({ data: "json, name=protoValue" })
  protoValue?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=stringArray" })
  stringArray?: EnterpriseCrmEventbusProtoStringArray;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
