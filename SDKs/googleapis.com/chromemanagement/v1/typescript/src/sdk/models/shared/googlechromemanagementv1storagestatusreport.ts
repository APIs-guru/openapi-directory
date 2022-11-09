import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleChromeManagementV1DiskInfo } from "./googlechromemanagementv1diskinfo";


// GoogleChromeManagementV1StorageStatusReport
/** 
 * Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceStorageStatus](https://chromeenterprise.google/policies/#ReportDeviceStorageStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
export class GoogleChromeManagementV1StorageStatusReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=disk", elemType: shared.GoogleChromeManagementV1DiskInfo })
  disk?: GoogleChromeManagementV1DiskInfo[];

  @Metadata({ data: "json, name=reportTime" })
  reportTime?: string;
}
