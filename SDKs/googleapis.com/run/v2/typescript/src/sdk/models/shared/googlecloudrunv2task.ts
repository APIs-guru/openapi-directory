import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";
import { GoogleCloudRunV2Container } from "./googlecloudrunv2container";
import { GoogleCloudRunV2TaskAttemptResult } from "./googlecloudrunv2taskattemptresult";
import { GoogleCloudRunV2Volume } from "./googlecloudrunv2volume";
import { GoogleCloudRunV2VpcAccess } from "./googlecloudrunv2vpcaccess";

export enum GoogleCloudRunV2TaskExecutionEnvironmentEnum {
    ExecutionEnvironmentUnspecified = "EXECUTION_ENVIRONMENT_UNSPECIFIED"
,    ExecutionEnvironmentGen1 = "EXECUTION_ENVIRONMENT_GEN1"
,    ExecutionEnvironmentGen2 = "EXECUTION_ENVIRONMENT_GEN2"
}

export enum GoogleCloudRunV2TaskLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED"
,    Unimplemented = "UNIMPLEMENTED"
,    Prelaunch = "PRELAUNCH"
,    EarlyAccess = "EARLY_ACCESS"
,    Alpha = "ALPHA"
,    Beta = "BETA"
,    Ga = "GA"
,    Deprecated = "DEPRECATED"
}


// GoogleCloudRunV2Task
/** 
 * Task represents a single run of a container to completion.
**/
export class GoogleCloudRunV2Task extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @Metadata({ data: "json, name=completionTime" })
  completionTime?: string;

  @Metadata({ data: "json, name=conditions", elemType: shared.GoogleCloudRunV2Condition })
  conditions?: GoogleCloudRunV2Condition[];

  @Metadata({ data: "json, name=containers", elemType: shared.GoogleCloudRunV2Container })
  containers?: GoogleCloudRunV2Container[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @Metadata({ data: "json, name=encryptionKey" })
  encryptionKey?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=execution" })
  execution?: string;

  @Metadata({ data: "json, name=executionEnvironment" })
  executionEnvironment?: GoogleCloudRunV2TaskExecutionEnvironmentEnum;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=generation" })
  generation?: string;

  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=job" })
  job?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=lastAttemptResult" })
  lastAttemptResult?: GoogleCloudRunV2TaskAttemptResult;

  @Metadata({ data: "json, name=launchStage" })
  launchStage?: GoogleCloudRunV2TaskLaunchStageEnum;

  @Metadata({ data: "json, name=maxRetries" })
  maxRetries?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=observedGeneration" })
  observedGeneration?: string;

  @Metadata({ data: "json, name=reconciling" })
  reconciling?: boolean;

  @Metadata({ data: "json, name=retried" })
  retried?: number;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=timeout" })
  timeout?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=volumes", elemType: shared.GoogleCloudRunV2Volume })
  volumes?: GoogleCloudRunV2Volume[];

  @Metadata({ data: "json, name=vpcAccess" })
  vpcAccess?: GoogleCloudRunV2VpcAccess;
}
