import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1GraphicsAdapterInfo } from "./googlechromemanagementv1graphicsadapterinfo";
/**
 * Information of the graphics subsystem. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceGraphicsStatus](https://chromeenterprise.google/policies/#ReportDeviceGraphicsStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
export declare class GoogleChromeManagementV1GraphicsInfo extends SpeakeasyBase {
    adapterInfo?: GoogleChromeManagementV1GraphicsAdapterInfo;
}
