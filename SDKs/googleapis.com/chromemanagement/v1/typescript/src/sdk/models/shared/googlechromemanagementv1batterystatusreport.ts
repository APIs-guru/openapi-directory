import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1BatterySampleReport } from "./googlechromemanagementv1batterysamplereport";


export enum GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum {
    BatteryHealthUnspecified = "BATTERY_HEALTH_UNSPECIFIED",
    BatteryHealthNormal = "BATTERY_HEALTH_NORMAL",
    BatteryReplaceSoon = "BATTERY_REPLACE_SOON",
    BatteryReplaceNow = "BATTERY_REPLACE_NOW"
}


// GoogleChromeManagementV1BatteryStatusReport
/** 
 * Status data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
export class GoogleChromeManagementV1BatteryStatusReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batteryHealth" })
  batteryHealth?: GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum;

  @SpeakeasyMetadata({ data: "json, name=cycleCount" })
  cycleCount?: number;

  @SpeakeasyMetadata({ data: "json, name=fullChargeCapacity" })
  fullChargeCapacity?: string;

  @SpeakeasyMetadata({ data: "json, name=reportTime" })
  reportTime?: string;

  @SpeakeasyMetadata({ data: "json, name=sample", elemType: GoogleChromeManagementV1BatterySampleReport })
  sample?: GoogleChromeManagementV1BatterySampleReport[];

  @SpeakeasyMetadata({ data: "json, name=serialNumber" })
  serialNumber?: string;
}
