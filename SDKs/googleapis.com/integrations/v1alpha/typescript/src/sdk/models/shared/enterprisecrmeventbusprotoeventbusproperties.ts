import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoPropertyEntry } from "./enterprisecrmeventbusprotopropertyentry";



// EnterpriseCrmEventbusProtoEventBusProperties
/** 
 * LINT.IfChange This message is used for storing key value pair properties for each Event / Task in the EventBus. Please see go/cloud-crm-eng/platform/event_bus.md for more details.
**/
export class EnterpriseCrmEventbusProtoEventBusProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=properties", elemType: EnterpriseCrmEventbusProtoPropertyEntry })
  properties?: EnterpriseCrmEventbusProtoPropertyEntry[];
}
