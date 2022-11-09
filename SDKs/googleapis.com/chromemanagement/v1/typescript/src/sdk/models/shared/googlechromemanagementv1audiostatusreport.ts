import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleChromeManagementV1AudioStatusReport
/** 
 * Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceAudioStatus](https://chromeenterprise.google/policies/#ReportDeviceAudioStatus) * Data Collection Frequency: 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
export class GoogleChromeManagementV1AudioStatusReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputDevice" })
  inputDevice?: string;

  @Metadata({ data: "json, name=inputGain" })
  inputGain?: number;

  @Metadata({ data: "json, name=inputMute" })
  inputMute?: boolean;

  @Metadata({ data: "json, name=outputDevice" })
  outputDevice?: string;

  @Metadata({ data: "json, name=outputMute" })
  outputMute?: boolean;

  @Metadata({ data: "json, name=outputVolume" })
  outputVolume?: number;

  @Metadata({ data: "json, name=reportTime" })
  reportTime?: string;
}
