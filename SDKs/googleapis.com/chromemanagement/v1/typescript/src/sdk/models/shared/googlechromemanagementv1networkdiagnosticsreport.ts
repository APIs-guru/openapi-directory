import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1HttpsLatencyRoutineData } from "./googlechromemanagementv1httpslatencyroutinedata";



// GoogleChromeManagementV1NetworkDiagnosticsReport
/** 
 * Network testing results to determine the health of the device's network connection, for example whether the HTTPS latency is high or normal.
**/
export class GoogleChromeManagementV1NetworkDiagnosticsReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=httpsLatencyData" })
  httpsLatencyData?: GoogleChromeManagementV1HttpsLatencyRoutineData;

  @SpeakeasyMetadata({ data: "json, name=reportTime" })
  reportTime?: string;
}
