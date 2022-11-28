import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Container } from "./googlecloudrunv2container";
import { GoogleCloudRunV2RevisionScaling } from "./googlecloudrunv2revisionscaling";
import { GoogleCloudRunV2Volume } from "./googlecloudrunv2volume";
import { GoogleCloudRunV2VpcAccess } from "./googlecloudrunv2vpcaccess";
export declare enum GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum {
    ExecutionEnvironmentUnspecified = "EXECUTION_ENVIRONMENT_UNSPECIFIED",
    ExecutionEnvironmentGen1 = "EXECUTION_ENVIRONMENT_GEN1",
    ExecutionEnvironmentGen2 = "EXECUTION_ENVIRONMENT_GEN2"
}
/**
 * RevisionTemplate describes the data a revision should have when created from a template.
**/
export declare class GoogleCloudRunV2RevisionTemplate extends SpeakeasyBase {
    annotations?: Map<string, string>;
    containers?: GoogleCloudRunV2Container[];
    encryptionKey?: string;
    executionEnvironment?: GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum;
    labels?: Map<string, string>;
    maxInstanceRequestConcurrency?: number;
    revision?: string;
    scaling?: GoogleCloudRunV2RevisionScaling;
    serviceAccount?: string;
    timeout?: string;
    volumes?: GoogleCloudRunV2Volume[];
    vpcAccess?: GoogleCloudRunV2VpcAccess;
}
