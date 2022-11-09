import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleChromeManagementV1NetworkDevice } from "./googlechromemanagementv1networkdevice";


// GoogleChromeManagementV1NetworkInfo
/** 
 * Network device information. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportNetworkDeviceConfiguration](https://chromeenterprise.google/policies/#ReportNetworkDeviceConfiguration) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A
**/
export class GoogleChromeManagementV1NetworkInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=networkDevices", elemType: shared.GoogleChromeManagementV1NetworkDevice })
  networkDevices?: GoogleChromeManagementV1NetworkDevice[];
}
