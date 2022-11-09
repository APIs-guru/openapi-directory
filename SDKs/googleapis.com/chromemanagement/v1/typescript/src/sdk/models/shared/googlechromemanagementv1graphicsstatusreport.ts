import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleChromeManagementV1DisplayInfo } from "./googlechromemanagementv1displayinfo";


// GoogleChromeManagementV1GraphicsStatusReport
/** 
 * Information of the graphics subsystem. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceGraphicsInfo](https://chromeenterprise.google/policies/#ReportDeviceGraphicsInfo) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
export class GoogleChromeManagementV1GraphicsStatusReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=displays", elemType: shared.GoogleChromeManagementV1DisplayInfo })
  displays?: GoogleChromeManagementV1DisplayInfo[];

  @Metadata({ data: "json, name=reportTime" })
  reportTime?: string;
}
