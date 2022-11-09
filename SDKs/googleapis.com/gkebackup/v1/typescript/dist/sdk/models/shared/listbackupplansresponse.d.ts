import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BackupPlan } from "./backupplan";
/**
 * Response message for ListBackupPlans.
**/
export declare class ListBackupPlansResponse extends SpeakeasyBase {
    backupPlans?: BackupPlan[];
    nextPageToken?: string;
    unreachable?: string[];
}
