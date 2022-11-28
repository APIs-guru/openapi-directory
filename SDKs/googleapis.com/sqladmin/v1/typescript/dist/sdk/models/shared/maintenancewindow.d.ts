import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MaintenanceWindowUpdateTrackEnum {
    SqlUpdateTrackUnspecified = "SQL_UPDATE_TRACK_UNSPECIFIED",
    Canary = "canary",
    Stable = "stable"
}
/**
 * Maintenance window. This specifies when a Cloud SQL instance is restarted for system maintenance purposes.
**/
export declare class MaintenanceWindow extends SpeakeasyBase {
    day?: number;
    hour?: number;
    kind?: string;
    updateTrack?: MaintenanceWindowUpdateTrackEnum;
}
