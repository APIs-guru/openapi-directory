import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoscalingSettings } from "./autoscalingsettings";
import { Disk } from "./disk";
import { Package } from "./package";
import { SdkHarnessContainerImage } from "./sdkharnesscontainerimage";
import { TaskRunnerSettings } from "./taskrunnersettings";

export enum WorkerPoolDefaultPackageSetEnum {
    DefaultPackageSetUnknown = "DEFAULT_PACKAGE_SET_UNKNOWN"
,    DefaultPackageSetNone = "DEFAULT_PACKAGE_SET_NONE"
,    DefaultPackageSetJava = "DEFAULT_PACKAGE_SET_JAVA"
,    DefaultPackageSetPython = "DEFAULT_PACKAGE_SET_PYTHON"
}

export enum WorkerPoolIpConfigurationEnum {
    WorkerIpUnspecified = "WORKER_IP_UNSPECIFIED"
,    WorkerIpPublic = "WORKER_IP_PUBLIC"
,    WorkerIpPrivate = "WORKER_IP_PRIVATE"
}

export enum WorkerPoolTeardownPolicyEnum {
    TeardownPolicyUnknown = "TEARDOWN_POLICY_UNKNOWN"
,    TeardownAlways = "TEARDOWN_ALWAYS"
,    TeardownOnSuccess = "TEARDOWN_ON_SUCCESS"
,    TeardownNever = "TEARDOWN_NEVER"
}


// WorkerPool
/** 
 * Describes one particular pool of Cloud Dataflow workers to be instantiated by the Cloud Dataflow service in order to perform the computations required by a job. Note that a workflow job may use multiple pools, in order to match the various computational requirements of the various stages of the job.
**/
export class WorkerPool extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoscalingSettings" })
  autoscalingSettings?: AutoscalingSettings;

  @Metadata({ data: "json, name=dataDisks", elemType: shared.Disk })
  dataDisks?: Disk[];

  @Metadata({ data: "json, name=defaultPackageSet" })
  defaultPackageSet?: WorkerPoolDefaultPackageSetEnum;

  @Metadata({ data: "json, name=diskSizeGb" })
  diskSizeGb?: number;

  @Metadata({ data: "json, name=diskSourceImage" })
  diskSourceImage?: string;

  @Metadata({ data: "json, name=diskType" })
  diskType?: string;

  @Metadata({ data: "json, name=ipConfiguration" })
  ipConfiguration?: WorkerPoolIpConfigurationEnum;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=machineType" })
  machineType?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=numThreadsPerWorker" })
  numThreadsPerWorker?: number;

  @Metadata({ data: "json, name=numWorkers" })
  numWorkers?: number;

  @Metadata({ data: "json, name=onHostMaintenance" })
  onHostMaintenance?: string;

  @Metadata({ data: "json, name=packages", elemType: shared.Package })
  packages?: Package[];

  @Metadata({ data: "json, name=poolArgs" })
  poolArgs?: Map<string, any>;

  @Metadata({ data: "json, name=sdkHarnessContainerImages", elemType: shared.SdkHarnessContainerImage })
  sdkHarnessContainerImages?: SdkHarnessContainerImage[];

  @Metadata({ data: "json, name=subnetwork" })
  subnetwork?: string;

  @Metadata({ data: "json, name=taskrunnerSettings" })
  taskrunnerSettings?: TaskRunnerSettings;

  @Metadata({ data: "json, name=teardownPolicy" })
  teardownPolicy?: WorkerPoolTeardownPolicyEnum;

  @Metadata({ data: "json, name=workerHarnessContainerImage" })
  workerHarnessContainerImage?: string;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
