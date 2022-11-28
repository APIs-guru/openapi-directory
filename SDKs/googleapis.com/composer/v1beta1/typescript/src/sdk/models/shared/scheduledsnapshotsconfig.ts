import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScheduledSnapshotsConfig
/** 
 * The configuration for scheduled snapshot creation mechanism.
**/
export class ScheduledSnapshotsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=snapshotCreationSchedule" })
  snapshotCreationSchedule?: string;

  @SpeakeasyMetadata({ data: "json, name=snapshotLocation" })
  snapshotLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
