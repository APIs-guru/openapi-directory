import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleChromeManagementV1TotalMemoryEncryptionInfo } from "./googlechromemanagementv1totalmemoryencryptioninfo";


// GoogleChromeManagementV1MemoryInfo
/** 
 * Memory information of a device. * This field has both telemetry and device information: - `totalRamBytes` - Device information - `availableRamBytes` - Telemetry information - `totalMemoryEncryption` - Device information * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: - `totalRamBytes` - Only at upload - `availableRamBytes` - Every 10 minutes - `totalMemoryEncryption` - at device startup * Default Data Reporting Frequency: - `totalRamBytes` - 3 hours - `availableRamBytes` - 3 hours - `totalMemoryEncryption` - at device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: only for `totalMemoryEncryption` * Reported for affiliated users only: N/A
**/
export class GoogleChromeManagementV1MemoryInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=availableRamBytes" })
  availableRamBytes?: string;

  @Metadata({ data: "json, name=totalMemoryEncryption" })
  totalMemoryEncryption?: GoogleChromeManagementV1TotalMemoryEncryptionInfo;

  @Metadata({ data: "json, name=totalRamBytes" })
  totalRamBytes?: string;
}
