import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleChromeManagementV1GraphicsAdapterInfo } from "./googlechromemanagementv1graphicsadapterinfo";


// GoogleChromeManagementV1GraphicsInfo
/** 
 * Information of the graphics subsystem. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceGraphicsStatus](https://chromeenterprise.google/policies/#ReportDeviceGraphicsStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
export class GoogleChromeManagementV1GraphicsInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=adapterInfo" })
  adapterInfo?: GoogleChromeManagementV1GraphicsAdapterInfo;
}
