import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GoogleCloudDatapipelinesV1RuntimeEnvironmentIpConfigurationEnum {
    WorkerIpUnspecified = "WORKER_IP_UNSPECIFIED",
    WorkerIpPublic = "WORKER_IP_PUBLIC",
    WorkerIpPrivate = "WORKER_IP_PRIVATE"
}
/**
 * The environment values to set at runtime.
**/
export declare class GoogleCloudDatapipelinesV1RuntimeEnvironment extends SpeakeasyBase {
    additionalExperiments?: string[];
    additionalUserLabels?: Map<string, string>;
    bypassTempDirValidation?: boolean;
    enableStreamingEngine?: boolean;
    ipConfiguration?: GoogleCloudDatapipelinesV1RuntimeEnvironmentIpConfigurationEnum;
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
