import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1HttpsLatencyRoutineData } from "./googlechromemanagementv1httpslatencyroutinedata";
/**
 * Network testing results to determine the health of the device's network connection, for example whether the HTTPS latency is high or normal.
**/
export declare class GoogleChromeManagementV1NetworkDiagnosticsReport extends SpeakeasyBase {
    httpsLatencyData?: GoogleChromeManagementV1HttpsLatencyRoutineData;
    reportTime?: string;
}
