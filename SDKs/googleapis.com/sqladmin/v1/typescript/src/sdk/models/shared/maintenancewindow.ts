import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MaintenanceWindowUpdateTrackEnum {
    SqlUpdateTrackUnspecified = "SQL_UPDATE_TRACK_UNSPECIFIED",
    Canary = "canary",
    Stable = "stable"
}


// MaintenanceWindow
/** 
 * Maintenance window. This specifies when a Cloud SQL instance is restarted for system maintenance purposes.
**/
export class MaintenanceWindow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=day" })
  day?: number;

  @SpeakeasyMetadata({ data: "json, name=hour" })
  hour?: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTrack" })
  updateTrack?: MaintenanceWindowUpdateTrackEnum;
}
