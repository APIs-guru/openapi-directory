import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum {
    AutoscalingAlgorithmUnknown = "AUTOSCALING_ALGORITHM_UNKNOWN"
,    AutoscalingAlgorithmNone = "AUTOSCALING_ALGORITHM_NONE"
,    AutoscalingAlgorithmBasic = "AUTOSCALING_ALGORITHM_BASIC"
}

export enum FlexTemplateRuntimeEnvironmentFlexrsGoalEnum {
    FlexrsUnspecified = "FLEXRS_UNSPECIFIED"
,    FlexrsSpeedOptimized = "FLEXRS_SPEED_OPTIMIZED"
,    FlexrsCostOptimized = "FLEXRS_COST_OPTIMIZED"
}

export enum FlexTemplateRuntimeEnvironmentIpConfigurationEnum {
    WorkerIpUnspecified = "WORKER_IP_UNSPECIFIED"
,    WorkerIpPublic = "WORKER_IP_PUBLIC"
,    WorkerIpPrivate = "WORKER_IP_PRIVATE"
}


// FlexTemplateRuntimeEnvironment
/** 
 * The environment values to be set at runtime for flex template.
**/
export class FlexTemplateRuntimeEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalExperiments" })
  additionalExperiments?: string[];

  @Metadata({ data: "json, name=additionalUserLabels" })
  additionalUserLabels?: Map<string, string>;

  @Metadata({ data: "json, name=autoscalingAlgorithm" })
  autoscalingAlgorithm?: FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum;

  @Metadata({ data: "json, name=diskSizeGb" })
  diskSizeGb?: number;

  @Metadata({ data: "json, name=dumpHeapOnOom" })
  dumpHeapOnOom?: boolean;

  @Metadata({ data: "json, name=enableLauncherVmSerialPortLogging" })
  enableLauncherVmSerialPortLogging?: boolean;

  @Metadata({ data: "json, name=enableStreamingEngine" })
  enableStreamingEngine?: boolean;

  @Metadata({ data: "json, name=flexrsGoal" })
  flexrsGoal?: FlexTemplateRuntimeEnvironmentFlexrsGoalEnum;

  @Metadata({ data: "json, name=ipConfiguration" })
  ipConfiguration?: FlexTemplateRuntimeEnvironmentIpConfigurationEnum;

  @Metadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @Metadata({ data: "json, name=launcherMachineType" })
  launcherMachineType?: string;

  @Metadata({ data: "json, name=machineType" })
  machineType?: string;

  @Metadata({ data: "json, name=maxWorkers" })
  maxWorkers?: number;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=numWorkers" })
  numWorkers?: number;

  @Metadata({ data: "json, name=saveHeapDumpsToGcsPath" })
  saveHeapDumpsToGcsPath?: string;

  @Metadata({ data: "json, name=sdkContainerImage" })
  sdkContainerImage?: string;

  @Metadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

  @Metadata({ data: "json, name=stagingLocation" })
  stagingLocation?: string;

  @Metadata({ data: "json, name=subnetwork" })
  subnetwork?: string;

  @Metadata({ data: "json, name=tempLocation" })
  tempLocation?: string;

  @Metadata({ data: "json, name=workerRegion" })
  workerRegion?: string;

  @Metadata({ data: "json, name=workerZone" })
  workerZone?: string;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
