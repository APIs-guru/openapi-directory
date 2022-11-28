import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DiagnosticConfig } from "./diagnosticconfig";



// DiagnoseRuntimeRequest
/** 
 * Request for creating a notebook instance diagnostic file.
**/
export class DiagnoseRuntimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diagnosticConfig" })
  diagnosticConfig?: DiagnosticConfig;
}
