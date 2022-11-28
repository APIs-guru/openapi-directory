import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";
import { GoogleCloudRunV2Container } from "./googlecloudrunv2container";
import { GoogleCloudRunV2RevisionScaling } from "./googlecloudrunv2revisionscaling";
import { GoogleCloudRunV2Volume } from "./googlecloudrunv2volume";
import { GoogleCloudRunV2VpcAccess } from "./googlecloudrunv2vpcaccess";


export enum GoogleCloudRunV2RevisionExecutionEnvironmentEnum {
    ExecutionEnvironmentUnspecified = "EXECUTION_ENVIRONMENT_UNSPECIFIED",
    ExecutionEnvironmentGen1 = "EXECUTION_ENVIRONMENT_GEN1",
    ExecutionEnvironmentGen2 = "EXECUTION_ENVIRONMENT_GEN2"
}

export enum GoogleCloudRunV2RevisionLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Unimplemented = "UNIMPLEMENTED",
    Prelaunch = "PRELAUNCH",
    EarlyAccess = "EARLY_ACCESS",
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}


// GoogleCloudRunV2Revision
/** 
 * A Revision is an immutable snapshot of code and configuration. A Revision references a container image. Revisions are only created by updates to its parent Service.
**/
export class GoogleCloudRunV2Revision extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

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

  @SpeakeasyMetadata({ data: "json, name=executionEnvironment" })
  executionEnvironment?: GoogleCloudRunV2RevisionExecutionEnvironmentEnum;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=generation" })
  generation?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=launchStage" })
  launchStage?: GoogleCloudRunV2RevisionLaunchStageEnum;

  @SpeakeasyMetadata({ data: "json, name=logUri" })
  logUri?: string;

  @SpeakeasyMetadata({ data: "json, name=maxInstanceRequestConcurrency" })
  maxInstanceRequestConcurrency?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=observedGeneration" })
  observedGeneration?: string;

  @SpeakeasyMetadata({ data: "json, name=reconciling" })
  reconciling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scaling" })
  scaling?: GoogleCloudRunV2RevisionScaling;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

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
