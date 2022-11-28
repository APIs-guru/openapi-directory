import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1StorageInfoDiskVolume } from "./googlechromemanagementv1storageinfodiskvolume";



// GoogleChromeManagementV1StorageInfo
/** 
 * Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceStorageStatus](https://chromeenterprise.google/policies/#ReportDeviceStorageStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
export class GoogleChromeManagementV1StorageInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availableDiskBytes" })
  availableDiskBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=totalDiskBytes" })
  totalDiskBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=volume", elemType: GoogleChromeManagementV1StorageInfoDiskVolume })
  volume?: GoogleChromeManagementV1StorageInfoDiskVolume[];
}
