import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Schedule defines scheduling parameters for automatically creating Backups via this BackupPlan.
**/
export declare class Schedule extends SpeakeasyBase {
    cronSchedule?: string;
    paused?: boolean;
}
