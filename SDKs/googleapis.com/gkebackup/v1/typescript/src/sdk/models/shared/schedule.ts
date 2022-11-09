import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Schedule
/** 
 * Schedule defines scheduling parameters for automatically creating Backups via this BackupPlan.
**/
export class Schedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=cronSchedule" })
  cronSchedule?: string;

  @Metadata({ data: "json, name=paused" })
  paused?: boolean;
}
