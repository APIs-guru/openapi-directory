import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDatapipelinesV1RuntimeEnvironmentIpConfigurationEnum {
    WorkerIpUnspecified = "WORKER_IP_UNSPECIFIED"
,    WorkerIpPublic = "WORKER_IP_PUBLIC"
,    WorkerIpPrivate = "WORKER_IP_PRIVATE"
}


// GoogleCloudDatapipelinesV1RuntimeEnvironment
/** 
 * The environment values to set at runtime.
**/
export class GoogleCloudDatapipelinesV1RuntimeEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalExperiments" })
  additionalExperiments?: string[];

  @Metadata({ data: "json, name=additionalUserLabels" })
  additionalUserLabels?: Map<string, string>;

  @Metadata({ data: "json, name=bypassTempDirValidation" })
  bypassTempDirValidation?: boolean;

  @Metadata({ data: "json, name=enableStreamingEngine" })
  enableStreamingEngine?: boolean;

  @Metadata({ data: "json, name=ipConfiguration" })
  ipConfiguration?: GoogleCloudDatapipelinesV1RuntimeEnvironmentIpConfigurationEnum;

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
