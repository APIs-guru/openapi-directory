import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Schedule
/** 
 * Schedule defines scheduling parameters for automatically creating Backups via this BackupPlan.
**/
export class Schedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cronSchedule" })
  cronSchedule?: string;

  @SpeakeasyMetadata({ data: "json, name=paused" })
  paused?: boolean;
}
