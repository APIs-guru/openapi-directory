import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleChromeManagementV1HttpsLatencyRoutineData } from "./googlechromemanagementv1httpslatencyroutinedata";


// GoogleChromeManagementV1NetworkDiagnosticsReport
/** 
 * Network testing results to determine the health of the device's network connection, for example whether the HTTPS latency is high or normal.
**/
export class GoogleChromeManagementV1NetworkDiagnosticsReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=httpsLatencyData" })
  httpsLatencyData?: GoogleChromeManagementV1HttpsLatencyRoutineData;

  @Metadata({ data: "json, name=reportTime" })
  reportTime?: string;
}
