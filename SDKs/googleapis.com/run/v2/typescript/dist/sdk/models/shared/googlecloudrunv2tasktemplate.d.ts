import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Container } from "./googlecloudrunv2container";
import { GoogleCloudRunV2Volume } from "./googlecloudrunv2volume";
import { GoogleCloudRunV2VpcAccess } from "./googlecloudrunv2vpcaccess";
export declare enum GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum {
    ExecutionEnvironmentUnspecified = "EXECUTION_ENVIRONMENT_UNSPECIFIED",
    ExecutionEnvironmentGen1 = "EXECUTION_ENVIRONMENT_GEN1",
    ExecutionEnvironmentGen2 = "EXECUTION_ENVIRONMENT_GEN2"
}
/**
 * TaskTemplate describes the data a task should have when created from a template.
**/
export declare class GoogleCloudRunV2TaskTemplate extends SpeakeasyBase {
    containers?: GoogleCloudRunV2Container[];
    encryptionKey?: string;
    executionEnvironment?: GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum;
    maxRetries?: number;
    serviceAccount?: string;
    timeout?: string;
    volumes?: GoogleCloudRunV2Volume[];
    vpcAccess?: GoogleCloudRunV2VpcAccess;
}
