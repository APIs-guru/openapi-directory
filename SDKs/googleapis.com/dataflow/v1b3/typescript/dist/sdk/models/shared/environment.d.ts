import { SpeakeasyBase } from "../../../internal/utils";
import { DebugOptions } from "./debugoptions";
import { WorkerPool } from "./workerpool";
export declare enum EnvironmentFlexResourceSchedulingGoalEnum {
    FlexrsUnspecified = "FLEXRS_UNSPECIFIED",
    FlexrsSpeedOptimized = "FLEXRS_SPEED_OPTIMIZED",
    FlexrsCostOptimized = "FLEXRS_COST_OPTIMIZED"
}
export declare enum EnvironmentShuffleModeEnum {
    ShuffleModeUnspecified = "SHUFFLE_MODE_UNSPECIFIED",
    VmBased = "VM_BASED",
    ServiceBased = "SERVICE_BASED"
}
/**
 * Describes the environment in which a Dataflow Job runs.
**/
export declare class Environment extends SpeakeasyBase {
    clusterManagerApiService?: string;
    dataset?: string;
    debugOptions?: DebugOptions;
    experiments?: string[];
    flexResourceSchedulingGoal?: EnvironmentFlexResourceSchedulingGoalEnum;
    internalExperiments?: Map<string, any>;
    sdkPipelineOptions?: Map<string, any>;
    serviceAccountEmail?: string;
    serviceKmsKeyName?: string;
    serviceOptions?: string[];
    shuffleMode?: EnvironmentShuffleModeEnum;
    tempStoragePrefix?: string;
    userAgent?: Map<string, any>;
    version?: Map<string, any>;
    workerPools?: WorkerPool[];
    workerRegion?: string;
    workerZone?: string;
}
/**
 * Describes the environment in which a Dataflow Job runs.
**/
export declare class EnvironmentInput extends SpeakeasyBase {
    clusterManagerApiService?: string;
    dataset?: string;
    debugOptions?: DebugOptions;
    experiments?: string[];
    flexResourceSchedulingGoal?: EnvironmentFlexResourceSchedulingGoalEnum;
    internalExperiments?: Map<string, any>;
    sdkPipelineOptions?: Map<string, any>;
    serviceAccountEmail?: string;
    serviceKmsKeyName?: string;
    serviceOptions?: string[];
    tempStoragePrefix?: string;
    userAgent?: Map<string, any>;
    version?: Map<string, any>;
    workerPools?: WorkerPool[];
    workerRegion?: string;
    workerZone?: string;
}
