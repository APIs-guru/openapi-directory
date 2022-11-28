import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2BinaryAuthorization } from "./googlecloudrunv2binaryauthorization";
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";
import { GoogleCloudRunV2ExecutionReference } from "./googlecloudrunv2executionreference";
import { GoogleCloudRunV2ExecutionTemplate } from "./googlecloudrunv2executiontemplate";
export declare enum GoogleCloudRunV2JobLaunchStageEnum {
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
 * Job represents the configuration of a single job. A job an immutable resource that references a container image which is run to completion.
**/
export declare class GoogleCloudRunV2Job extends SpeakeasyBase {
    annotations?: Map<string, string>;
    binaryAuthorization?: GoogleCloudRunV2BinaryAuthorization;
    client?: string;
    clientVersion?: string;
    conditions?: GoogleCloudRunV2Condition[];
    createTime?: string;
    creator?: string;
    deleteTime?: string;
    etag?: string;
    executionCount?: number;
    expireTime?: string;
    generation?: string;
    labels?: Map<string, string>;
    lastModifier?: string;
    latestCreatedExecution?: GoogleCloudRunV2ExecutionReference;
    launchStage?: GoogleCloudRunV2JobLaunchStageEnum;
    name?: string;
    observedGeneration?: string;
    reconciling?: boolean;
    template?: GoogleCloudRunV2ExecutionTemplate;
    terminalCondition?: GoogleCloudRunV2Condition;
    uid?: string;
    updateTime?: string;
}
/**
 * Job represents the configuration of a single job. A job an immutable resource that references a container image which is run to completion.
**/
export declare class GoogleCloudRunV2JobInput extends SpeakeasyBase {
    annotations?: Map<string, string>;
    binaryAuthorization?: GoogleCloudRunV2BinaryAuthorization;
    client?: string;
    clientVersion?: string;
    labels?: Map<string, string>;
    latestCreatedExecution?: GoogleCloudRunV2ExecutionReference;
    launchStage?: GoogleCloudRunV2JobLaunchStageEnum;
    name?: string;
    template?: GoogleCloudRunV2ExecutionTemplate;
    terminalCondition?: GoogleCloudRunV2Condition;
}
