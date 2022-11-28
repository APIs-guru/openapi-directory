import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleChromeManagementV1AudioStatusReport
/** 
 * Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceAudioStatus](https://chromeenterprise.google/policies/#ReportDeviceAudioStatus) * Data Collection Frequency: 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
export class GoogleChromeManagementV1AudioStatusReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputDevice" })
  inputDevice?: string;

  @SpeakeasyMetadata({ data: "json, name=inputGain" })
  inputGain?: number;

  @SpeakeasyMetadata({ data: "json, name=inputMute" })
  inputMute?: boolean;

  @SpeakeasyMetadata({ data: "json, name=outputDevice" })
  outputDevice?: string;

  @SpeakeasyMetadata({ data: "json, name=outputMute" })
  outputMute?: boolean;

  @SpeakeasyMetadata({ data: "json, name=outputVolume" })
  outputVolume?: number;

  @SpeakeasyMetadata({ data: "json, name=reportTime" })
  reportTime?: string;
}
