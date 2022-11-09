import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleChromeManagementV1BatterySampleReport
/** 
 * Sampling data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
export class GoogleChromeManagementV1BatterySampleReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=chargeRate" })
  chargeRate?: number;

  @Metadata({ data: "json, name=current" })
  current?: string;

  @Metadata({ data: "json, name=dischargeRate" })
  dischargeRate?: number;

  @Metadata({ data: "json, name=remainingCapacity" })
  remainingCapacity?: string;

  @Metadata({ data: "json, name=reportTime" })
  reportTime?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=temperature" })
  temperature?: number;

  @Metadata({ data: "json, name=voltage" })
  voltage?: string;
}
