import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1CpuTemperatureInfo } from "./googlechromemanagementv1cputemperatureinfo";



// GoogleChromeManagementV1CpuStatusReport
/** 
 * Provides information about the status of the CPU. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Every 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
export class GoogleChromeManagementV1CpuStatusReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuTemperatureInfo", elemType: GoogleChromeManagementV1CpuTemperatureInfo })
  cpuTemperatureInfo?: GoogleChromeManagementV1CpuTemperatureInfo[];

  @SpeakeasyMetadata({ data: "json, name=cpuUtilizationPct" })
  cpuUtilizationPct?: number;

  @SpeakeasyMetadata({ data: "json, name=reportTime" })
  reportTime?: string;

  @SpeakeasyMetadata({ data: "json, name=sampleFrequency" })
  sampleFrequency?: string;
}
