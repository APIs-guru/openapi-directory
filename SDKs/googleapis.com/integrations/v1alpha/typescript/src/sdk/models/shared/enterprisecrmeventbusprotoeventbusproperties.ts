import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmEventbusProtoPropertyEntry } from "./enterprisecrmeventbusprotopropertyentry";


// EnterpriseCrmEventbusProtoEventBusProperties
/** 
 * LINT.IfChange This message is used for storing key value pair properties for each Event / Task in the EventBus. Please see go/cloud-crm-eng/platform/event_bus.md for more details.
**/
export class EnterpriseCrmEventbusProtoEventBusProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=properties", elemType: shared.EnterpriseCrmEventbusProtoPropertyEntry })
  properties?: EnterpriseCrmEventbusProtoPropertyEntry[];
}
