import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoscalingSettings } from "./autoscalingsettings";
import { Disk } from "./disk";
import { Package } from "./package";
import { SDKHarnessContainerImage } from "./sdkharnesscontainerimage";
import { TaskRunnerSettings } from "./taskrunnersettings";


export enum WorkerPoolDefaultPackageSetEnum {
    DefaultPackageSetUnknown = "DEFAULT_PACKAGE_SET_UNKNOWN",
    DefaultPackageSetNone = "DEFAULT_PACKAGE_SET_NONE",
    DefaultPackageSetJava = "DEFAULT_PACKAGE_SET_JAVA",
    DefaultPackageSetPython = "DEFAULT_PACKAGE_SET_PYTHON"
}

export enum WorkerPoolIpConfigurationEnum {
    WorkerIpUnspecified = "WORKER_IP_UNSPECIFIED",
    WorkerIpPublic = "WORKER_IP_PUBLIC",
    WorkerIpPrivate = "WORKER_IP_PRIVATE"
}

export enum WorkerPoolTeardownPolicyEnum {
    TeardownPolicyUnknown = "TEARDOWN_POLICY_UNKNOWN",
    TeardownAlways = "TEARDOWN_ALWAYS",
    TeardownOnSuccess = "TEARDOWN_ON_SUCCESS",
    TeardownNever = "TEARDOWN_NEVER"
}


// WorkerPool
/** 
 * Describes one particular pool of Cloud Dataflow workers to be instantiated by the Cloud Dataflow service in order to perform the computations required by a job. Note that a workflow job may use multiple pools, in order to match the various computational requirements of the various stages of the job.
**/
export class WorkerPool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoscalingSettings" })
  autoscalingSettings?: AutoscalingSettings;

  @SpeakeasyMetadata({ data: "json, name=dataDisks", elemType: Disk })
  dataDisks?: Disk[];

  @SpeakeasyMetadata({ data: "json, name=defaultPackageSet" })
  defaultPackageSet?: WorkerPoolDefaultPackageSetEnum;

  @SpeakeasyMetadata({ data: "json, name=diskSizeGb" })
  diskSizeGb?: number;

  @SpeakeasyMetadata({ data: "json, name=diskSourceImage" })
  diskSourceImage?: string;

  @SpeakeasyMetadata({ data: "json, name=diskType" })
  diskType?: string;

  @SpeakeasyMetadata({ data: "json, name=ipConfiguration" })
  ipConfiguration?: WorkerPoolIpConfigurationEnum;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=numThreadsPerWorker" })
  numThreadsPerWorker?: number;

  @SpeakeasyMetadata({ data: "json, name=numWorkers" })
  numWorkers?: number;

  @SpeakeasyMetadata({ data: "json, name=onHostMaintenance" })
  onHostMaintenance?: string;

  @SpeakeasyMetadata({ data: "json, name=packages", elemType: Package })
  packages?: Package[];

  @SpeakeasyMetadata({ data: "json, name=poolArgs" })
  poolArgs?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=sdkHarnessContainerImages", elemType: SDKHarnessContainerImage })
  sdkHarnessContainerImages?: SDKHarnessContainerImage[];

  @SpeakeasyMetadata({ data: "json, name=subnetwork" })
  subnetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=taskrunnerSettings" })
  taskrunnerSettings?: TaskRunnerSettings;

  @SpeakeasyMetadata({ data: "json, name=teardownPolicy" })
  teardownPolicy?: WorkerPoolTeardownPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=workerHarnessContainerImage" })
  workerHarnessContainerImage?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
