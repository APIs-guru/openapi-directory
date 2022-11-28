import { SpeakeasyBase } from "../../../internal/utils";
import { RestoreConfig } from "./restoreconfig";
/**
 * The configuration of a potential series of Restore operations to be performed against Backups belong to a particular BackupPlan. Next id: 11
**/
export declare class RestorePlan extends SpeakeasyBase {
    backupPlan?: string;
    cluster?: string;
    createTime?: string;
    description?: string;
    etag?: string;
    labels?: Map<string, string>;
    name?: string;
    restoreConfig?: RestoreConfig;
    uid?: string;
    updateTime?: string;
}
/**
 * The configuration of a potential series of Restore operations to be performed against Backups belong to a particular BackupPlan. Next id: 11
**/
export declare class RestorePlanInput extends SpeakeasyBase {
    backupPlan?: string;
    cluster?: string;
    description?: string;
    labels?: Map<string, string>;
    restoreConfig?: RestoreConfig;
}
