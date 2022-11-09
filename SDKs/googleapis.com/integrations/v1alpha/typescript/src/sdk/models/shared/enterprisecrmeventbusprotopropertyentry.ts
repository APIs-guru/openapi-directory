import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnterpriseCrmEventbusProtoValueType } from "./enterprisecrmeventbusprotovaluetype";


// EnterpriseCrmEventbusProtoPropertyEntry
/** 
 * Key-value pair of EventBus property.
**/
export class EnterpriseCrmEventbusProtoPropertyEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: EnterpriseCrmEventbusProtoValueType;
}
