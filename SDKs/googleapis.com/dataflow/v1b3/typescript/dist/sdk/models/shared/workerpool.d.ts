import { SpeakeasyBase } from "../../../internal/utils";
import { AutoscalingSettings } from "./autoscalingsettings";
import { Disk } from "./disk";
import { Package } from "./package";
import { SDKHarnessContainerImage } from "./sdkharnesscontainerimage";
import { TaskRunnerSettings } from "./taskrunnersettings";
export declare enum WorkerPoolDefaultPackageSetEnum {
    DefaultPackageSetUnknown = "DEFAULT_PACKAGE_SET_UNKNOWN",
    DefaultPackageSetNone = "DEFAULT_PACKAGE_SET_NONE",
    DefaultPackageSetJava = "DEFAULT_PACKAGE_SET_JAVA",
    DefaultPackageSetPython = "DEFAULT_PACKAGE_SET_PYTHON"
}
export declare enum WorkerPoolIpConfigurationEnum {
    WorkerIpUnspecified = "WORKER_IP_UNSPECIFIED",
    WorkerIpPublic = "WORKER_IP_PUBLIC",
    WorkerIpPrivate = "WORKER_IP_PRIVATE"
}
export declare enum WorkerPoolTeardownPolicyEnum {
    TeardownPolicyUnknown = "TEARDOWN_POLICY_UNKNOWN",
    TeardownAlways = "TEARDOWN_ALWAYS",
    TeardownOnSuccess = "TEARDOWN_ON_SUCCESS",
    TeardownNever = "TEARDOWN_NEVER"
}
/**
 * Describes one particular pool of Cloud Dataflow workers to be instantiated by the Cloud Dataflow service in order to perform the computations required by a job. Note that a workflow job may use multiple pools, in order to match the various computational requirements of the various stages of the job.
**/
export declare class WorkerPool extends SpeakeasyBase {
    autoscalingSettings?: AutoscalingSettings;
    dataDisks?: Disk[];
    defaultPackageSet?: WorkerPoolDefaultPackageSetEnum;
    diskSizeGb?: number;
    diskSourceImage?: string;
    diskType?: string;
    ipConfiguration?: WorkerPoolIpConfigurationEnum;
    kind?: string;
    machineType?: string;
    metadata?: Map<string, string>;
    network?: string;
    numThreadsPerWorker?: number;
    numWorkers?: number;
    onHostMaintenance?: string;
    packages?: Package[];
    poolArgs?: Map<string, any>;
    sdkHarnessContainerImages?: SDKHarnessContainerImage[];
    subnetwork?: string;
    taskrunnerSettings?: TaskRunnerSettings;
    teardownPolicy?: WorkerPoolTeardownPolicyEnum;
    workerHarnessContainerImage?: string;
    zone?: string;
}
