import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRunV2BinaryAuthorization } from "./googlecloudrunv2binaryauthorization";
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";
import { GoogleCloudRunV2ExecutionReference } from "./googlecloudrunv2executionreference";
import { GoogleCloudRunV2ExecutionTemplate } from "./googlecloudrunv2executiontemplate";
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";

export enum GoogleCloudRunV2JobLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED"
,    Unimplemented = "UNIMPLEMENTED"
,    Prelaunch = "PRELAUNCH"
,    EarlyAccess = "EARLY_ACCESS"
,    Alpha = "ALPHA"
,    Beta = "BETA"
,    Ga = "GA"
,    Deprecated = "DEPRECATED"
}


// GoogleCloudRunV2Job
/** 
 * Job represents the configuration of a single job. A job an immutable resource that references a container image which is run to completion.
**/
export class GoogleCloudRunV2Job extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @Metadata({ data: "json, name=binaryAuthorization" })
  binaryAuthorization?: GoogleCloudRunV2BinaryAuthorization;

  @Metadata({ data: "json, name=client" })
  client?: string;

  @Metadata({ data: "json, name=clientVersion" })
  clientVersion?: string;

  @Metadata({ data: "json, name=conditions", elemType: shared.GoogleCloudRunV2Condition })
  conditions?: GoogleCloudRunV2Condition[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creator" })
  creator?: string;

  @Metadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=executionCount" })
  executionCount?: number;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=generation" })
  generation?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=lastModifier" })
  lastModifier?: string;

  @Metadata({ data: "json, name=latestCreatedExecution" })
  latestCreatedExecution?: GoogleCloudRunV2ExecutionReference;

  @Metadata({ data: "json, name=launchStage" })
  launchStage?: GoogleCloudRunV2JobLaunchStageEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=observedGeneration" })
  observedGeneration?: string;

  @Metadata({ data: "json, name=reconciling" })
  reconciling?: boolean;

  @Metadata({ data: "json, name=template" })
  template?: GoogleCloudRunV2ExecutionTemplate;

  @Metadata({ data: "json, name=terminalCondition" })
  terminalCondition?: GoogleCloudRunV2Condition;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
