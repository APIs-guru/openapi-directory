import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";
import { GoogleCloudRunV2Container } from "./googlecloudrunv2container";
import { GoogleCloudRunV2TaskAttemptResult } from "./googlecloudrunv2taskattemptresult";
import { GoogleCloudRunV2Volume } from "./googlecloudrunv2volume";
import { GoogleCloudRunV2VpcAccess } from "./googlecloudrunv2vpcaccess";
export declare enum GoogleCloudRunV2TaskExecutionEnvironmentEnum {
    ExecutionEnvironmentUnspecified = "EXECUTION_ENVIRONMENT_UNSPECIFIED",
    ExecutionEnvironmentGen1 = "EXECUTION_ENVIRONMENT_GEN1",
    ExecutionEnvironmentGen2 = "EXECUTION_ENVIRONMENT_GEN2"
}
/**
 * Task represents a single run of a container to completion.
**/
export declare class GoogleCloudRunV2Task extends SpeakeasyBase {
    annotations?: Map<string, string>;
    completionTime?: string;
    conditions?: GoogleCloudRunV2Condition[];
    containers?: GoogleCloudRunV2Container[];
    createTime?: string;
    deleteTime?: string;
    encryptionKey?: string;
    etag?: string;
    execution?: string;
    executionEnvironment?: GoogleCloudRunV2TaskExecutionEnvironmentEnum;
    expireTime?: string;
    generation?: string;
    index?: number;
    job?: string;
    labels?: Map<string, string>;
    lastAttemptResult?: GoogleCloudRunV2TaskAttemptResult;
    maxRetries?: number;
    name?: string;
    observedGeneration?: string;
    reconciling?: boolean;
    retried?: number;
    serviceAccount?: string;
    startTime?: string;
    timeout?: string;
    uid?: string;
    updateTime?: string;
    volumes?: GoogleCloudRunV2Volume[];
    vpcAccess?: GoogleCloudRunV2VpcAccess;
}
