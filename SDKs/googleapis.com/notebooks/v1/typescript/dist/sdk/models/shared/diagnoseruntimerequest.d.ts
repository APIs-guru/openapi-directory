import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DiagnosticConfig } from "./diagnosticconfig";
/**
 * Request for creating a notebook instance diagnostic file.
**/
export declare class DiagnoseRuntimeRequest extends SpeakeasyBase {
    diagnosticConfig?: DiagnosticConfig;
}
