import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
export declare enum DiagnosticsAlertsEnum {
    AlertUnspecified = "ALERT_UNSPECIFIED",
    WrongLocation = "WRONG_LOCATION",
    LowBattery = "LOW_BATTERY",
    LowActivity = "LOW_ACTIVITY"
}
/**
 * Diagnostics for a single beacon.
**/
export declare class Diagnostics extends SpeakeasyBase {
    alerts?: DiagnosticsAlertsEnum[];
    beaconName?: string;
    estimatedLowBatteryDate?: Date;
}
