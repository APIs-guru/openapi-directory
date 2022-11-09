import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmEventbusProtoParameterEntry } from "./enterprisecrmeventbusprotoparameterentry";


// EnterpriseCrmEventbusProtoEventParameters
/** 
 * LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see go/integration-platform/event_bus.md for more details. Next id: 4
**/
export class EnterpriseCrmEventbusProtoEventParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameters", elemType: shared.EnterpriseCrmEventbusProtoParameterEntry })
  parameters?: EnterpriseCrmEventbusProtoParameterEntry[];
}
