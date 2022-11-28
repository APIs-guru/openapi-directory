import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Sampling data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
export declare class GoogleChromeManagementV1BatterySampleReport extends SpeakeasyBase {
    chargeRate?: number;
    current?: string;
    dischargeRate?: number;
    remainingCapacity?: string;
    reportTime?: string;
    status?: string;
    temperature?: number;
    voltage?: string;
}
