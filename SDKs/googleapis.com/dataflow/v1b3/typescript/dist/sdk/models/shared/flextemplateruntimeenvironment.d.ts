import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum {
    AutoscalingAlgorithmUnknown = "AUTOSCALING_ALGORITHM_UNKNOWN",
    AutoscalingAlgorithmNone = "AUTOSCALING_ALGORITHM_NONE",
    AutoscalingAlgorithmBasic = "AUTOSCALING_ALGORITHM_BASIC"
}
export declare enum FlexTemplateRuntimeEnvironmentFlexrsGoalEnum {
    FlexrsUnspecified = "FLEXRS_UNSPECIFIED",
    FlexrsSpeedOptimized = "FLEXRS_SPEED_OPTIMIZED",
    FlexrsCostOptimized = "FLEXRS_COST_OPTIMIZED"
}
export declare enum FlexTemplateRuntimeEnvironmentIpConfigurationEnum {
    WorkerIpUnspecified = "WORKER_IP_UNSPECIFIED",
    WorkerIpPublic = "WORKER_IP_PUBLIC",
    WorkerIpPrivate = "WORKER_IP_PRIVATE"
}
/**
 * The environment values to be set at runtime for flex template.
**/
export declare class FlexTemplateRuntimeEnvironment extends SpeakeasyBase {
    additionalExperiments?: string[];
    additionalUserLabels?: Map<string, string>;
    autoscalingAlgorithm?: FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum;
    diskSizeGb?: number;
    dumpHeapOnOom?: boolean;
    enableLauncherVmSerialPortLogging?: boolean;
    enableStreamingEngine?: boolean;
    flexrsGoal?: FlexTemplateRuntimeEnvironmentFlexrsGoalEnum;
    ipConfiguration?: FlexTemplateRuntimeEnvironmentIpConfigurationEnum;
    kmsKeyName?: string;
    launcherMachineType?: string;
    machineType?: string;
    maxWorkers?: number;
    network?: string;
    numWorkers?: number;
    saveHeapDumpsToGcsPath?: string;
    sdkContainerImage?: string;
    serviceAccountEmail?: string;
    stagingLocation?: string;
    subnetwork?: string;
    tempLocation?: string;
    workerRegion?: string;
    workerZone?: string;
    zone?: string;
}
