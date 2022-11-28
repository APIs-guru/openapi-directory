import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1DisplayInfo } from "./googlechromemanagementv1displayinfo";
/**
 * Information of the graphics subsystem. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceGraphicsInfo](https://chromeenterprise.google/policies/#ReportDeviceGraphicsInfo) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
export declare class GoogleChromeManagementV1GraphicsStatusReport extends SpeakeasyBase {
    displays?: GoogleChromeManagementV1DisplayInfo[];
    reportTime?: string;
}
