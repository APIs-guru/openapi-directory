import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleChromeManagementV1BatterySampleReport } from "./googlechromemanagementv1batterysamplereport";

export enum GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum {
    BatteryHealthUnspecified = "BATTERY_HEALTH_UNSPECIFIED"
,    BatteryHealthNormal = "BATTERY_HEALTH_NORMAL"
,    BatteryReplaceSoon = "BATTERY_REPLACE_SOON"
,    BatteryReplaceNow = "BATTERY_REPLACE_NOW"
}


// GoogleChromeManagementV1BatteryStatusReport
/** 
 * Status data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
export class GoogleChromeManagementV1BatteryStatusReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=batteryHealth" })
  batteryHealth?: GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum;

  @Metadata({ data: "json, name=cycleCount" })
  cycleCount?: number;

  @Metadata({ data: "json, name=fullChargeCapacity" })
  fullChargeCapacity?: string;

  @Metadata({ data: "json, name=reportTime" })
  reportTime?: string;

  @Metadata({ data: "json, name=sample", elemType: shared.GoogleChromeManagementV1BatterySampleReport })
  sample?: GoogleChromeManagementV1BatterySampleReport[];

  @Metadata({ data: "json, name=serialNumber" })
  serialNumber?: string;
}
