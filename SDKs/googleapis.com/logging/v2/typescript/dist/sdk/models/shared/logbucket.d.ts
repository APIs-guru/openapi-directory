import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CmekSettings } from "./cmeksettings";
import { IndexConfig } from "./indexconfig";
export declare enum LogBucketLifecycleStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    DeleteRequested = "DELETE_REQUESTED"
}
/**
 * Describes a repository in which log entries are stored.
**/
export declare class LogBucket extends SpeakeasyBase {
    cmekSettings?: CmekSettings;
    createTime?: string;
    description?: string;
    indexConfigs?: IndexConfig[];
    lifecycleState?: LogBucketLifecycleStateEnum;
    locked?: boolean;
    name?: string;
    restrictedFields?: string[];
    retentionDays?: number;
    updateTime?: string;
}
