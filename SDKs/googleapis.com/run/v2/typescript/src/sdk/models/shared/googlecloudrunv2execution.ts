import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";
import { GoogleCloudRunV2TaskTemplate } from "./googlecloudrunv2tasktemplate";


export enum GoogleCloudRunV2ExecutionLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Unimplemented = "UNIMPLEMENTED",
    Prelaunch = "PRELAUNCH",
    EarlyAccess = "EARLY_ACCESS",
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}


// GoogleCloudRunV2Execution
/** 
 * Execution represents the configuration of a single execution. A execution an immutable resource that references a container image which is run to completion.
**/
export class GoogleCloudRunV2Execution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=completionTime" })
  completionTime?: string;

  @SpeakeasyMetadata({ data: "json, name=conditions", elemType: GoogleCloudRunV2Condition })
  conditions?: GoogleCloudRunV2Condition[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=failedCount" })
  failedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=generation" })
  generation?: string;

  @SpeakeasyMetadata({ data: "json, name=job" })
  job?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=launchStage" })
  launchStage?: GoogleCloudRunV2ExecutionLaunchStageEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=observedGeneration" })
  observedGeneration?: string;

  @SpeakeasyMetadata({ data: "json, name=parallelism" })
  parallelism?: number;

  @SpeakeasyMetadata({ data: "json, name=reconciling" })
  reconciling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=runningCount" })
  runningCount?: number;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=succeededCount" })
  succeededCount?: number;

  @SpeakeasyMetadata({ data: "json, name=taskCount" })
  taskCount?: number;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: GoogleCloudRunV2TaskTemplate;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
