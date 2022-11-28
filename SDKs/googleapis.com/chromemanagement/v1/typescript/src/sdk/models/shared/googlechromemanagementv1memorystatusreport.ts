import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleChromeManagementV1MemoryStatusReport
/** 
 * Contains samples of memory status reports. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: Only at upload, SystemRamFreeByes is collected every 10 minutes * Default Data Reporting Frequency: Every 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
export class GoogleChromeManagementV1MemoryStatusReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageFaults" })
  pageFaults?: number;

  @SpeakeasyMetadata({ data: "json, name=reportTime" })
  reportTime?: string;

  @SpeakeasyMetadata({ data: "json, name=sampleFrequency" })
  sampleFrequency?: string;

  @SpeakeasyMetadata({ data: "json, name=systemRamFreeBytes" })
  systemRamFreeBytes?: string;
}
