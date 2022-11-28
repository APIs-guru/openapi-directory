import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Database instance restore from backup context. Backup context contains source instance id and project id.
**/
export declare class RestoreBackupContext extends SpeakeasyBase {
    backupRunId?: string;
    instanceId?: string;
    kind?: string;
    project?: string;
}
