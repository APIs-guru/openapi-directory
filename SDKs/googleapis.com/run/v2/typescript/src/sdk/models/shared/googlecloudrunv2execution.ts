import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";
import { GoogleCloudRunV2TaskTemplate } from "./googlecloudrunv2tasktemplate";

export enum GoogleCloudRunV2ExecutionLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED"
,    Unimplemented = "UNIMPLEMENTED"
,    Prelaunch = "PRELAUNCH"
,    EarlyAccess = "EARLY_ACCESS"
,    Alpha = "ALPHA"
,    Beta = "BETA"
,    Ga = "GA"
,    Deprecated = "DEPRECATED"
}


// GoogleCloudRunV2Execution
/** 
 * Execution represents the configuration of a single execution. A execution an immutable resource that references a container image which is run to completion.
**/
export class GoogleCloudRunV2Execution extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @Metadata({ data: "json, name=completionTime" })
  completionTime?: string;

  @Metadata({ data: "json, name=conditions", elemType: shared.GoogleCloudRunV2Condition })
  conditions?: GoogleCloudRunV2Condition[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=failedCount" })
  failedCount?: number;

  @Metadata({ data: "json, name=generation" })
  generation?: string;

  @Metadata({ data: "json, name=job" })
  job?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=launchStage" })
  launchStage?: GoogleCloudRunV2ExecutionLaunchStageEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=observedGeneration" })
  observedGeneration?: string;

  @Metadata({ data: "json, name=parallelism" })
  parallelism?: number;

  @Metadata({ data: "json, name=reconciling" })
  reconciling?: boolean;

  @Metadata({ data: "json, name=runningCount" })
  runningCount?: number;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=succeededCount" })
  succeededCount?: number;

  @Metadata({ data: "json, name=taskCount" })
  taskCount?: number;

  @Metadata({ data: "json, name=template" })
  template?: GoogleCloudRunV2TaskTemplate;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
