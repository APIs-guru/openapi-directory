import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleChromeManagementV1CpuTemperatureInfo
/** 
 * CPU temperature of a device. Sampled per CPU core in Celsius. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Every 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
export class GoogleChromeManagementV1CpuTemperatureInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=temperatureCelsius" })
  temperatureCelsius?: number;
}
