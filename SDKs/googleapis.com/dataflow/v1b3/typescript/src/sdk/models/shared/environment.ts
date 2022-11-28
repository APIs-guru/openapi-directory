import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DebugOptions } from "./debugoptions";
import { WorkerPool } from "./workerpool";


export enum EnvironmentFlexResourceSchedulingGoalEnum {
    FlexrsUnspecified = "FLEXRS_UNSPECIFIED",
    FlexrsSpeedOptimized = "FLEXRS_SPEED_OPTIMIZED",
    FlexrsCostOptimized = "FLEXRS_COST_OPTIMIZED"
}

export enum EnvironmentShuffleModeEnum {
    ShuffleModeUnspecified = "SHUFFLE_MODE_UNSPECIFIED",
    VmBased = "VM_BASED",
    ServiceBased = "SERVICE_BASED"
}


// Environment
/** 
 * Describes the environment in which a Dataflow Job runs.
**/
export class Environment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterManagerApiService" })
  clusterManagerApiService?: string;

  @SpeakeasyMetadata({ data: "json, name=dataset" })
  dataset?: string;

  @SpeakeasyMetadata({ data: "json, name=debugOptions" })
  debugOptions?: DebugOptions;

  @SpeakeasyMetadata({ data: "json, name=experiments" })
  experiments?: string[];

  @SpeakeasyMetadata({ data: "json, name=flexResourceSchedulingGoal" })
  flexResourceSchedulingGoal?: EnvironmentFlexResourceSchedulingGoalEnum;

  @SpeakeasyMetadata({ data: "json, name=internalExperiments" })
  internalExperiments?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=sdkPipelineOptions" })
  sdkPipelineOptions?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceKmsKeyName" })
  serviceKmsKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceOptions" })
  serviceOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=shuffleMode" })
  shuffleMode?: EnvironmentShuffleModeEnum;

  @SpeakeasyMetadata({ data: "json, name=tempStoragePrefix" })
  tempStoragePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=userAgent" })
  userAgent?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=workerPools", elemType: WorkerPool })
  workerPools?: WorkerPool[];

  @SpeakeasyMetadata({ data: "json, name=workerRegion" })
  workerRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=workerZone" })
  workerZone?: string;
}


// EnvironmentInput
/** 
 * Describes the environment in which a Dataflow Job runs.
**/
export class EnvironmentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterManagerApiService" })
  clusterManagerApiService?: string;

  @SpeakeasyMetadata({ data: "json, name=dataset" })
  dataset?: string;

  @SpeakeasyMetadata({ data: "json, name=debugOptions" })
  debugOptions?: DebugOptions;

  @SpeakeasyMetadata({ data: "json, name=experiments" })
  experiments?: string[];

  @SpeakeasyMetadata({ data: "json, name=flexResourceSchedulingGoal" })
  flexResourceSchedulingGoal?: EnvironmentFlexResourceSchedulingGoalEnum;

  @SpeakeasyMetadata({ data: "json, name=internalExperiments" })
  internalExperiments?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=sdkPipelineOptions" })
  sdkPipelineOptions?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceKmsKeyName" })
  serviceKmsKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceOptions" })
  serviceOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=tempStoragePrefix" })
  tempStoragePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=userAgent" })
  userAgent?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=workerPools", elemType: WorkerPool })
  workerPools?: WorkerPool[];

  @SpeakeasyMetadata({ data: "json, name=workerRegion" })
  workerRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=workerZone" })
  workerZone?: string;
}
