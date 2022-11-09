import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DiagnosticConfig } from "./diagnosticconfig";


// DiagnoseRuntimeRequest
/** 
 * Request for creating a notebook instance diagnostic file.
**/
export class DiagnoseRuntimeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=diagnosticConfig" })
  diagnosticConfig?: DiagnosticConfig;
}
