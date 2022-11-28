import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleChromeManagementV1BatterySampleReport
/** 
 * Sampling data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
export class GoogleChromeManagementV1BatterySampleReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeRate" })
  chargeRate?: number;

  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: string;

  @SpeakeasyMetadata({ data: "json, name=dischargeRate" })
  dischargeRate?: number;

  @SpeakeasyMetadata({ data: "json, name=remainingCapacity" })
  remainingCapacity?: string;

  @SpeakeasyMetadata({ data: "json, name=reportTime" })
  reportTime?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=temperature" })
  temperature?: number;

  @SpeakeasyMetadata({ data: "json, name=voltage" })
  voltage?: string;
}
