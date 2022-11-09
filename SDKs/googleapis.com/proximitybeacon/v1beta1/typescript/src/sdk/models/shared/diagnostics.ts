import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Date } from "./date";

export enum DiagnosticsAlertsEnum {
    AlertUnspecified = "ALERT_UNSPECIFIED"
,    WrongLocation = "WRONG_LOCATION"
,    LowBattery = "LOW_BATTERY"
,    LowActivity = "LOW_ACTIVITY"
}


// Diagnostics
/** 
 * Diagnostics for a single beacon.
**/
export class Diagnostics extends SpeakeasyBase {
  @Metadata({ data: "json, name=alerts" })
  alerts?: DiagnosticsAlertsEnum[];

  @Metadata({ data: "json, name=beaconName" })
  beaconName?: string;

  @Metadata({ data: "json, name=estimatedLowBatteryDate" })
  estimatedLowBatteryDate?: Date;
}
