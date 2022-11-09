import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MaintenanceWindowUpdateTrackEnum {
    SqlUpdateTrackUnspecified = "SQL_UPDATE_TRACK_UNSPECIFIED"
,    Canary = "canary"
,    Stable = "stable"
}


// MaintenanceWindow
/** 
 * Maintenance window. This specifies when a Cloud SQL instance is restarted for system maintenance purposes.
**/
export class MaintenanceWindow extends SpeakeasyBase {
  @Metadata({ data: "json, name=day" })
  day?: number;

  @Metadata({ data: "json, name=hour" })
  hour?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=updateTrack" })
  updateTrack?: MaintenanceWindowUpdateTrackEnum;
}
