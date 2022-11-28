import { SpeakeasyBase } from "../../../internal/utils";
import { BackupConfig } from "./backupconfig";
import { Schedule } from "./schedule";
import { RetentionPolicy } from "./retentionpolicy";
/**
 * Defines the configuration and scheduling for a "line" of Backups.
**/
export declare class BackupPlanInput extends SpeakeasyBase {
    backupConfig?: BackupConfig;
    backupSchedule?: Schedule;
    cluster?: string;
    deactivated?: boolean;
    description?: string;
    labels?: Map<string, string>;
    retentionPolicy?: RetentionPolicy;
}
/**
 * Defines the configuration and scheduling for a "line" of Backups.
**/
export declare class BackupPlan extends SpeakeasyBase {
    backupConfig?: BackupConfig;
    backupSchedule?: Schedule;
    cluster?: string;
    createTime?: string;
    deactivated?: boolean;
    description?: string;
    etag?: string;
    labels?: Map<string, string>;
    name?: string;
    protectedPodCount?: number;
    retentionPolicy?: RetentionPolicy;
    uid?: string;
    updateTime?: string;
}
