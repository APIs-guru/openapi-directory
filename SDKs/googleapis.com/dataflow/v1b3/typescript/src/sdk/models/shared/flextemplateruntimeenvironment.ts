import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum {
    AutoscalingAlgorithmUnknown = "AUTOSCALING_ALGORITHM_UNKNOWN",
    AutoscalingAlgorithmNone = "AUTOSCALING_ALGORITHM_NONE",
    AutoscalingAlgorithmBasic = "AUTOSCALING_ALGORITHM_BASIC"
}

export enum FlexTemplateRuntimeEnvironmentFlexrsGoalEnum {
    FlexrsUnspecified = "FLEXRS_UNSPECIFIED",
    FlexrsSpeedOptimized = "FLEXRS_SPEED_OPTIMIZED",
    FlexrsCostOptimized = "FLEXRS_COST_OPTIMIZED"
}

export enum FlexTemplateRuntimeEnvironmentIpConfigurationEnum {
    WorkerIpUnspecified = "WORKER_IP_UNSPECIFIED",
    WorkerIpPublic = "WORKER_IP_PUBLIC",
    WorkerIpPrivate = "WORKER_IP_PRIVATE"
}


// FlexTemplateRuntimeEnvironment
/** 
 * The environment values to be set at runtime for flex template.
**/
export class FlexTemplateRuntimeEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalExperiments" })
  additionalExperiments?: string[];

  @SpeakeasyMetadata({ data: "json, name=additionalUserLabels" })
  additionalUserLabels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=autoscalingAlgorithm" })
  autoscalingAlgorithm?: FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum;

  @SpeakeasyMetadata({ data: "json, name=diskSizeGb" })
  diskSizeGb?: number;

  @SpeakeasyMetadata({ data: "json, name=dumpHeapOnOom" })
  dumpHeapOnOom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableLauncherVmSerialPortLogging" })
  enableLauncherVmSerialPortLogging?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableStreamingEngine" })
  enableStreamingEngine?: boolean;

  @SpeakeasyMetadata({ data: "json, name=flexrsGoal" })
  flexrsGoal?: FlexTemplateRuntimeEnvironmentFlexrsGoalEnum;

  @SpeakeasyMetadata({ data: "json, name=ipConfiguration" })
  ipConfiguration?: FlexTemplateRuntimeEnvironmentIpConfigurationEnum;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=launcherMachineType" })
  launcherMachineType?: string;

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;

  @SpeakeasyMetadata({ data: "json, name=maxWorkers" })
  maxWorkers?: number;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=numWorkers" })
  numWorkers?: number;

  @SpeakeasyMetadata({ data: "json, name=saveHeapDumpsToGcsPath" })
  saveHeapDumpsToGcsPath?: string;

  @SpeakeasyMetadata({ data: "json, name=sdkContainerImage" })
  sdkContainerImage?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=stagingLocation" })
  stagingLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=subnetwork" })
  subnetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=tempLocation" })
  tempLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=workerRegion" })
  workerRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=workerZone" })
  workerZone?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
