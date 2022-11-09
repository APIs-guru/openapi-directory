import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleChromeManagementV1StorageInfoDiskVolume } from "./googlechromemanagementv1storageinfodiskvolume";


// GoogleChromeManagementV1StorageInfo
/** 
 * Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceStorageStatus](https://chromeenterprise.google/policies/#ReportDeviceStorageStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
export class GoogleChromeManagementV1StorageInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=availableDiskBytes" })
  availableDiskBytes?: string;

  @Metadata({ data: "json, name=totalDiskBytes" })
  totalDiskBytes?: string;

  @Metadata({ data: "json, name=volume", elemType: shared.GoogleChromeManagementV1StorageInfoDiskVolume })
  volume?: GoogleChromeManagementV1StorageInfoDiskVolume[];
}
