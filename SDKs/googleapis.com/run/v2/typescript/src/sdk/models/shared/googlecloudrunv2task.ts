import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";
import { GoogleCloudRunV2Container } from "./googlecloudrunv2container";
import { GoogleCloudRunV2TaskAttemptResult } from "./googlecloudrunv2taskattemptresult";
import { GoogleCloudRunV2Volume } from "./googlecloudrunv2volume";
import { GoogleCloudRunV2VpcAccess } from "./googlecloudrunv2vpcaccess";


export enum GoogleCloudRunV2TaskExecutionEnvironmentEnum {
    ExecutionEnvironmentUnspecified = "EXECUTION_ENVIRONMENT_UNSPECIFIED",
    ExecutionEnvironmentGen1 = "EXECUTION_ENVIRONMENT_GEN1",
    ExecutionEnvironmentGen2 = "EXECUTION_ENVIRONMENT_GEN2"
}


// GoogleCloudRunV2Task
/** 
 * Task represents a single run of a container to completion.
**/
export class GoogleCloudRunV2Task extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=completionTime" })
  completionTime?: string;

  @SpeakeasyMetadata({ data: "json, name=conditions", elemType: GoogleCloudRunV2Condition })
  conditions?: GoogleCloudRunV2Condition[];

  @SpeakeasyMetadata({ data: "json, name=containers", elemType: GoogleCloudRunV2Container })
  containers?: GoogleCloudRunV2Container[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=encryptionKey" })
  encryptionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=execution" })
  execution?: string;

  @SpeakeasyMetadata({ data: "json, name=executionEnvironment" })
  executionEnvironment?: GoogleCloudRunV2TaskExecutionEnvironmentEnum;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=generation" })
  generation?: string;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=job" })
  job?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lastAttemptResult" })
  lastAttemptResult?: GoogleCloudRunV2TaskAttemptResult;

  @SpeakeasyMetadata({ data: "json, name=maxRetries" })
  maxRetries?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=observedGeneration" })
  observedGeneration?: string;

  @SpeakeasyMetadata({ data: "json, name=reconciling" })
  reconciling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=retried" })
  retried?: number;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: GoogleCloudRunV2Volume })
  volumes?: GoogleCloudRunV2Volume[];

  @SpeakeasyMetadata({ data: "json, name=vpcAccess" })
  vpcAccess?: GoogleCloudRunV2VpcAccess;
}
