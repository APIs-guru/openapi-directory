import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";


export enum DiagnosticsAlertsEnum {
    AlertUnspecified = "ALERT_UNSPECIFIED",
    WrongLocation = "WRONG_LOCATION",
    LowBattery = "LOW_BATTERY",
    LowActivity = "LOW_ACTIVITY"
}


// Diagnostics
/** 
 * Diagnostics for a single beacon.
**/
export class Diagnostics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alerts" })
  alerts?: DiagnosticsAlertsEnum[];

  @SpeakeasyMetadata({ data: "json, name=beaconName" })
  beaconName?: string;

  @SpeakeasyMetadata({ data: "json, name=estimatedLowBatteryDate" })
  estimatedLowBatteryDate?: Date;
}
