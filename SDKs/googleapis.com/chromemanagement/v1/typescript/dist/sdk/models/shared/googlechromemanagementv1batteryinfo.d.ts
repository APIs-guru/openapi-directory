import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";
/**
 * Information about the battery. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
export declare class GoogleChromeManagementV1BatteryInfo extends SpeakeasyBase {
    designCapacity?: string;
    designMinVoltage?: number;
    manufactureDate?: GoogleTypeDate;
    manufacturer?: string;
    serialNumber?: string;
    technology?: string;
}
