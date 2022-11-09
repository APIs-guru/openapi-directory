import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum {
    FlexrsUnspecified = "FLEXRS_UNSPECIFIED"
,    FlexrsSpeedOptimized = "FLEXRS_SPEED_OPTIMIZED"
,    FlexrsCostOptimized = "FLEXRS_COST_OPTIMIZED"
}

export enum GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfigurationEnum {
    WorkerIpUnspecified = "WORKER_IP_UNSPECIFIED"
,    WorkerIpPublic = "WORKER_IP_PUBLIC"
,    WorkerIpPrivate = "WORKER_IP_PRIVATE"
}


// GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment
/** 
 * The environment values to be set at runtime for a Flex Template.
**/
export class GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalExperiments" })
  additionalExperiments?: string[];

  @Metadata({ data: "json, name=additionalUserLabels" })
  additionalUserLabels?: Map<string, string>;

  @Metadata({ data: "json, name=enableStreamingEngine" })
  enableStreamingEngine?: boolean;

  @Metadata({ data: "json, name=flexrsGoal" })
  flexrsGoal?: GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum;

  @Metadata({ data: "json, name=ipConfiguration" })
  ipConfiguration?: GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfigurationEnum;

  @Metadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @Metadata({ data: "json, name=machineType" })
  machineType?: string;

  @Metadata({ data: "json, name=maxWorkers" })
  maxWorkers?: number;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=numWorkers" })
  numWorkers?: number;

  @Metadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

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
