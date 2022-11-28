import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2BinaryAuthorization } from "./googlecloudrunv2binaryauthorization";
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";
import { GoogleCloudRunV2ExecutionReference } from "./googlecloudrunv2executionreference";
import { GoogleCloudRunV2ExecutionTemplate } from "./googlecloudrunv2executiontemplate";


export enum GoogleCloudRunV2JobLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Unimplemented = "UNIMPLEMENTED",
    Prelaunch = "PRELAUNCH",
    EarlyAccess = "EARLY_ACCESS",
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}


// GoogleCloudRunV2Job
/** 
 * Job represents the configuration of a single job. A job an immutable resource that references a container image which is run to completion.
**/
export class GoogleCloudRunV2Job extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=binaryAuthorization" })
  binaryAuthorization?: GoogleCloudRunV2BinaryAuthorization;

  @SpeakeasyMetadata({ data: "json, name=client" })
  client?: string;

  @SpeakeasyMetadata({ data: "json, name=clientVersion" })
  clientVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=conditions", elemType: GoogleCloudRunV2Condition })
  conditions?: GoogleCloudRunV2Condition[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: string;

  @SpeakeasyMetadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=executionCount" })
  executionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=generation" })
  generation?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lastModifier" })
  lastModifier?: string;

  @SpeakeasyMetadata({ data: "json, name=latestCreatedExecution" })
  latestCreatedExecution?: GoogleCloudRunV2ExecutionReference;

  @SpeakeasyMetadata({ data: "json, name=launchStage" })
  launchStage?: GoogleCloudRunV2JobLaunchStageEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=observedGeneration" })
  observedGeneration?: string;

  @SpeakeasyMetadata({ data: "json, name=reconciling" })
  reconciling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: GoogleCloudRunV2ExecutionTemplate;

  @SpeakeasyMetadata({ data: "json, name=terminalCondition" })
  terminalCondition?: GoogleCloudRunV2Condition;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// GoogleCloudRunV2JobInput
/** 
 * Job represents the configuration of a single job. A job an immutable resource that references a container image which is run to completion.
**/
export class GoogleCloudRunV2JobInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=binaryAuthorization" })
  binaryAuthorization?: GoogleCloudRunV2BinaryAuthorization;

  @SpeakeasyMetadata({ data: "json, name=client" })
  client?: string;

  @SpeakeasyMetadata({ data: "json, name=clientVersion" })
  clientVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=latestCreatedExecution" })
  latestCreatedExecution?: GoogleCloudRunV2ExecutionReference;

  @SpeakeasyMetadata({ data: "json, name=launchStage" })
  launchStage?: GoogleCloudRunV2JobLaunchStageEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: GoogleCloudRunV2ExecutionTemplate;

  @SpeakeasyMetadata({ data: "json, name=terminalCondition" })
  terminalCondition?: GoogleCloudRunV2Condition;
}
