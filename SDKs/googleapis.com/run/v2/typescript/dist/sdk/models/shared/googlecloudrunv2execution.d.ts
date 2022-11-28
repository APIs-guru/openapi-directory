import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";
import { GoogleCloudRunV2TaskTemplate } from "./googlecloudrunv2tasktemplate";
export declare enum GoogleCloudRunV2ExecutionLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Unimplemented = "UNIMPLEMENTED",
    Prelaunch = "PRELAUNCH",
    EarlyAccess = "EARLY_ACCESS",
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}
/**
 * Execution represents the configuration of a single execution. A execution an immutable resource that references a container image which is run to completion.
**/
export declare class GoogleCloudRunV2Execution extends SpeakeasyBase {
    annotations?: Map<string, string>;
    completionTime?: string;
    conditions?: GoogleCloudRunV2Condition[];
    createTime?: string;
    deleteTime?: string;
    etag?: string;
    expireTime?: string;
    failedCount?: number;
    generation?: string;
    job?: string;
    labels?: Map<string, string>;
    launchStage?: GoogleCloudRunV2ExecutionLaunchStageEnum;
    name?: string;
    observedGeneration?: string;
    parallelism?: number;
    reconciling?: boolean;
    runningCount?: number;
    startTime?: string;
    succeededCount?: number;
    taskCount?: number;
    template?: GoogleCloudRunV2TaskTemplate;
    uid?: string;
    updateTime?: string;
}
