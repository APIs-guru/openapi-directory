import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoValueType } from "./enterprisecrmeventbusprotovaluetype";



// EnterpriseCrmEventbusProtoPropertyEntry
/** 
 * Key-value pair of EventBus property.
**/
export class EnterpriseCrmEventbusProtoPropertyEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: EnterpriseCrmEventbusProtoValueType;
}
