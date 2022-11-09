import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum {
    FlexrsUnspecified = "FLEXRS_UNSPECIFIED",
    FlexrsSpeedOptimized = "FLEXRS_SPEED_OPTIMIZED",
    FlexrsCostOptimized = "FLEXRS_COST_OPTIMIZED"
}
export declare enum GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfigurationEnum {
    WorkerIpUnspecified = "WORKER_IP_UNSPECIFIED",
    WorkerIpPublic = "WORKER_IP_PUBLIC",
    WorkerIpPrivate = "WORKER_IP_PRIVATE"
}
/**
 * The environment values to be set at runtime for a Flex Template.
**/
export declare class GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment extends SpeakeasyBase {
    additionalExperiments?: string[];
    additionalUserLabels?: Map<string, string>;
    enableStreamingEngine?: boolean;
    flexrsGoal?: GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum;
    ipConfiguration?: GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfigurationEnum;
    kmsKeyName?: string;
    machineType?: string;
    maxWorkers?: number;
    network?: string;
    numWorkers?: number;
    serviceAccountEmail?: string;
    subnetwork?: string;
    tempLocation?: string;
    workerRegion?: string;
    workerZone?: string;
    zone?: string;
}
