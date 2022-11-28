import { SpeakeasyBase } from "../../../internal/utils";
import { BackupRun } from "./backuprun";
/**
 * Backup run list results.
**/
export declare class BackupRunsListResponse extends SpeakeasyBase {
    items?: BackupRun[];
    kind?: string;
    nextPageToken?: string;
}
