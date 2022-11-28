import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";



// GoogleChromeManagementV1BatteryInfo
/** 
 * Information about the battery. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
export class GoogleChromeManagementV1BatteryInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=designCapacity" })
  designCapacity?: string;

  @SpeakeasyMetadata({ data: "json, name=designMinVoltage" })
  designMinVoltage?: number;

  @SpeakeasyMetadata({ data: "json, name=manufactureDate" })
  manufactureDate?: GoogleTypeDate;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=technology" })
  technology?: string;
}
