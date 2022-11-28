import { SpeakeasyBase } from "../../../internal/utils";
import { RestoreConfig } from "./restoreconfig";
export declare enum RestoreStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Deleting = "DELETING"
}
/**
 * Represents both a request to Restore some portion of a Backup into a target GKE cluster and a record of the restore operation itself. Next id: 18
**/
export declare class RestoreInput extends SpeakeasyBase {
    backup?: string;
    description?: string;
    labels?: Map<string, string>;
    restoreConfig?: RestoreConfig;
}
/**
 * Represents both a request to Restore some portion of a Backup into a target GKE cluster and a record of the restore operation itself. Next id: 18
**/
export declare class Restore extends SpeakeasyBase {
    backup?: string;
    cluster?: string;
    completeTime?: string;
    createTime?: string;
    description?: string;
    etag?: string;
    labels?: Map<string, string>;
    name?: string;
    resourcesExcludedCount?: number;
    resourcesFailedCount?: number;
    resourcesRestoredCount?: number;
    restoreConfig?: RestoreConfig;
    state?: RestoreStateEnum;
    stateReason?: string;
    uid?: string;
    updateTime?: string;
    volumesRestoredCount?: number;
}
