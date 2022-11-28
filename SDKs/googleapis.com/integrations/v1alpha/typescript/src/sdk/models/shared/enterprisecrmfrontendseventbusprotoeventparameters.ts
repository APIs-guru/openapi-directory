import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";



// EnterpriseCrmFrontendsEventbusProtoEventParameters
/** 
 * LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see go/integration-platform/event_bus.md for more details. Next id: 4
**/
export class EnterpriseCrmFrontendsEventbusProtoEventParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: EnterpriseCrmFrontendsEventbusProtoParameterEntry })
  parameters?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[];
}
