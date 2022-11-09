import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DebugOptions } from "./debugoptions";
import { WorkerPool } from "./workerpool";

export enum EnvironmentFlexResourceSchedulingGoalEnum {
    FlexrsUnspecified = "FLEXRS_UNSPECIFIED"
,    FlexrsSpeedOptimized = "FLEXRS_SPEED_OPTIMIZED"
,    FlexrsCostOptimized = "FLEXRS_COST_OPTIMIZED"
}

export enum EnvironmentShuffleModeEnum {
    ShuffleModeUnspecified = "SHUFFLE_MODE_UNSPECIFIED"
,    VmBased = "VM_BASED"
,    ServiceBased = "SERVICE_BASED"
}


// Environment
/** 
 * Describes the environment in which a Dataflow Job runs.
**/
export class Environment extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterManagerApiService" })
  clusterManagerApiService?: string;

  @Metadata({ data: "json, name=dataset" })
  dataset?: string;

  @Metadata({ data: "json, name=debugOptions" })
  debugOptions?: DebugOptions;

  @Metadata({ data: "json, name=experiments" })
  experiments?: string[];

  @Metadata({ data: "json, name=flexResourceSchedulingGoal" })
  flexResourceSchedulingGoal?: EnvironmentFlexResourceSchedulingGoalEnum;

  @Metadata({ data: "json, name=internalExperiments" })
  internalExperiments?: Map<string, any>;

  @Metadata({ data: "json, name=sdkPipelineOptions" })
  sdkPipelineOptions?: Map<string, any>;

  @Metadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

  @Metadata({ data: "json, name=serviceKmsKeyName" })
  serviceKmsKeyName?: string;

  @Metadata({ data: "json, name=serviceOptions" })
  serviceOptions?: string[];

  @Metadata({ data: "json, name=shuffleMode" })
  shuffleMode?: EnvironmentShuffleModeEnum;

  @Metadata({ data: "json, name=tempStoragePrefix" })
  tempStoragePrefix?: string;

  @Metadata({ data: "json, name=userAgent" })
  userAgent?: Map<string, any>;

  @Metadata({ data: "json, name=version" })
  version?: Map<string, any>;

  @Metadata({ data: "json, name=workerPools", elemType: shared.WorkerPool })
  workerPools?: WorkerPool[];

  @Metadata({ data: "json, name=workerRegion" })
  workerRegion?: string;

  @Metadata({ data: "json, name=workerZone" })
  workerZone?: string;
}
