import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";
import { GoogleCloudRunV2Container } from "./googlecloudrunv2container";
import { GoogleCloudRunV2RevisionScaling } from "./googlecloudrunv2revisionscaling";
import { GoogleCloudRunV2Volume } from "./googlecloudrunv2volume";
import { GoogleCloudRunV2VpcAccess } from "./googlecloudrunv2vpcaccess";
export declare enum GoogleCloudRunV2RevisionExecutionEnvironmentEnum {
    ExecutionEnvironmentUnspecified = "EXECUTION_ENVIRONMENT_UNSPECIFIED",
    ExecutionEnvironmentGen1 = "EXECUTION_ENVIRONMENT_GEN1",
    ExecutionEnvironmentGen2 = "EXECUTION_ENVIRONMENT_GEN2"
}
export declare enum GoogleCloudRunV2RevisionLaunchStageEnum {
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
 * A Revision is an immutable snapshot of code and configuration. A Revision references a container image. Revisions are only created by updates to its parent Service.
**/
export declare class GoogleCloudRunV2Revision extends SpeakeasyBase {
    annotations?: Map<string, string>;
    conditions?: GoogleCloudRunV2Condition[];
    containers?: GoogleCloudRunV2Container[];
    createTime?: string;
    deleteTime?: string;
    encryptionKey?: string;
    etag?: string;
    executionEnvironment?: GoogleCloudRunV2RevisionExecutionEnvironmentEnum;
    expireTime?: string;
    generation?: string;
    labels?: Map<string, string>;
    launchStage?: GoogleCloudRunV2RevisionLaunchStageEnum;
    logUri?: string;
    maxInstanceRequestConcurrency?: number;
    name?: string;
    observedGeneration?: string;
    reconciling?: boolean;
    scaling?: GoogleCloudRunV2RevisionScaling;
    service?: string;
    serviceAccount?: string;
    timeout?: string;
    uid?: string;
    updateTime?: string;
    volumes?: GoogleCloudRunV2Volume[];
    vpcAccess?: GoogleCloudRunV2VpcAccess;
}
