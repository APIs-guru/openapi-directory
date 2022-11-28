import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains samples of memory status reports. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: Only at upload, SystemRamFreeByes is collected every 10 minutes * Default Data Reporting Frequency: Every 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
export declare class GoogleChromeManagementV1MemoryStatusReport extends SpeakeasyBase {
    pageFaults?: number;
    reportTime?: string;
    sampleFrequency?: string;
    systemRamFreeBytes?: string;
}
