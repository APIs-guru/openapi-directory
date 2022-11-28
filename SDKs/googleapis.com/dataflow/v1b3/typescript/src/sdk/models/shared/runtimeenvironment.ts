import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RuntimeEnvironmentIpConfigurationEnum {
    WorkerIpUnspecified = "WORKER_IP_UNSPECIFIED",
    WorkerIpPublic = "WORKER_IP_PUBLIC",
    WorkerIpPrivate = "WORKER_IP_PRIVATE"
}


// RuntimeEnvironment
/** 
 * The environment values to set at runtime.
**/
export class RuntimeEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalExperiments" })
  additionalExperiments?: string[];

  @SpeakeasyMetadata({ data: "json, name=additionalUserLabels" })
  additionalUserLabels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=bypassTempDirValidation" })
  bypassTempDirValidation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableStreamingEngine" })
  enableStreamingEngine?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ipConfiguration" })
  ipConfiguration?: RuntimeEnvironmentIpConfigurationEnum;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;

  @SpeakeasyMetadata({ data: "json, name=maxWorkers" })
  maxWorkers?: number;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=numWorkers" })
  numWorkers?: number;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

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
