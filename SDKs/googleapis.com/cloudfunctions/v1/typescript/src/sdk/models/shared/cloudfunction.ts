import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventTrigger } from "./eventtrigger";
import { HttpsTriggerInput } from "./httpstrigger";
import { SecretEnvVar } from "./secretenvvar";
import { SecretVolume } from "./secretvolume";
import { SourceRepositoryInput } from "./sourcerepository";
import { HttpsTrigger } from "./httpstrigger";
import { SourceRepository } from "./sourcerepository";


export enum CloudFunctionDockerRegistryEnum {
    DockerRegistryUnspecified = "DOCKER_REGISTRY_UNSPECIFIED",
    ContainerRegistry = "CONTAINER_REGISTRY",
    ArtifactRegistry = "ARTIFACT_REGISTRY"
}

export enum CloudFunctionIngressSettingsEnum {
    IngressSettingsUnspecified = "INGRESS_SETTINGS_UNSPECIFIED",
    AllowAll = "ALLOW_ALL",
    AllowInternalOnly = "ALLOW_INTERNAL_ONLY",
    AllowInternalAndGclb = "ALLOW_INTERNAL_AND_GCLB"
}

export enum CloudFunctionVpcConnectorEgressSettingsEnum {
    VpcConnectorEgressSettingsUnspecified = "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED",
    PrivateRangesOnly = "PRIVATE_RANGES_ONLY",
    AllTraffic = "ALL_TRAFFIC"
}

export enum CloudFunctionStatusEnum {
    CloudFunctionStatusUnspecified = "CLOUD_FUNCTION_STATUS_UNSPECIFIED",
    Active = "ACTIVE",
    Offline = "OFFLINE",
    DeployInProgress = "DEPLOY_IN_PROGRESS",
    DeleteInProgress = "DELETE_IN_PROGRESS",
    Unknown = "UNKNOWN"
}


// CloudFunctionInput
/** 
 * Describes a Cloud Function that contains user computation executed in response to an event. It encapsulate function and triggers configurations.
**/
export class CloudFunctionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availableMemoryMb" })
  availableMemoryMb?: number;

  @SpeakeasyMetadata({ data: "json, name=buildEnvironmentVariables" })
  buildEnvironmentVariables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=buildWorkerPool" })
  buildWorkerPool?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dockerRegistry" })
  dockerRegistry?: CloudFunctionDockerRegistryEnum;

  @SpeakeasyMetadata({ data: "json, name=dockerRepository" })
  dockerRepository?: string;

  @SpeakeasyMetadata({ data: "json, name=entryPoint" })
  entryPoint?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentVariables" })
  environmentVariables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=eventTrigger" })
  eventTrigger?: EventTrigger;

  @SpeakeasyMetadata({ data: "json, name=httpsTrigger" })
  httpsTrigger?: HttpsTriggerInput;

  @SpeakeasyMetadata({ data: "json, name=ingressSettings" })
  ingressSettings?: CloudFunctionIngressSettingsEnum;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=maxInstances" })
  maxInstances?: number;

  @SpeakeasyMetadata({ data: "json, name=minInstances" })
  minInstances?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=runtime" })
  runtime?: string;

  @SpeakeasyMetadata({ data: "json, name=secretEnvironmentVariables", elemType: SecretEnvVar })
  secretEnvironmentVariables?: SecretEnvVar[];

  @SpeakeasyMetadata({ data: "json, name=secretVolumes", elemType: SecretVolume })
  secretVolumes?: SecretVolume[];

  @SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceArchiveUrl" })
  sourceArchiveUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceRepository" })
  sourceRepository?: SourceRepositoryInput;

  @SpeakeasyMetadata({ data: "json, name=sourceToken" })
  sourceToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceUploadUrl" })
  sourceUploadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;

  @SpeakeasyMetadata({ data: "json, name=vpcConnector" })
  vpcConnector?: string;

  @SpeakeasyMetadata({ data: "json, name=vpcConnectorEgressSettings" })
  vpcConnectorEgressSettings?: CloudFunctionVpcConnectorEgressSettingsEnum;
}


// CloudFunction
/** 
 * Describes a Cloud Function that contains user computation executed in response to an event. It encapsulate function and triggers configurations.
**/
export class CloudFunction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availableMemoryMb" })
  availableMemoryMb?: number;

  @SpeakeasyMetadata({ data: "json, name=buildEnvironmentVariables" })
  buildEnvironmentVariables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=buildId" })
  buildId?: string;

  @SpeakeasyMetadata({ data: "json, name=buildName" })
  buildName?: string;

  @SpeakeasyMetadata({ data: "json, name=buildWorkerPool" })
  buildWorkerPool?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dockerRegistry" })
  dockerRegistry?: CloudFunctionDockerRegistryEnum;

  @SpeakeasyMetadata({ data: "json, name=dockerRepository" })
  dockerRepository?: string;

  @SpeakeasyMetadata({ data: "json, name=entryPoint" })
  entryPoint?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentVariables" })
  environmentVariables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=eventTrigger" })
  eventTrigger?: EventTrigger;

  @SpeakeasyMetadata({ data: "json, name=httpsTrigger" })
  httpsTrigger?: HttpsTrigger;

  @SpeakeasyMetadata({ data: "json, name=ingressSettings" })
  ingressSettings?: CloudFunctionIngressSettingsEnum;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=maxInstances" })
  maxInstances?: number;

  @SpeakeasyMetadata({ data: "json, name=minInstances" })
  minInstances?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=runtime" })
  runtime?: string;

  @SpeakeasyMetadata({ data: "json, name=secretEnvironmentVariables", elemType: SecretEnvVar })
  secretEnvironmentVariables?: SecretEnvVar[];

  @SpeakeasyMetadata({ data: "json, name=secretVolumes", elemType: SecretVolume })
  secretVolumes?: SecretVolume[];

  @SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceArchiveUrl" })
  sourceArchiveUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceRepository" })
  sourceRepository?: SourceRepository;

  @SpeakeasyMetadata({ data: "json, name=sourceToken" })
  sourceToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceUploadUrl" })
  sourceUploadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CloudFunctionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=versionId" })
  versionId?: string;

  @SpeakeasyMetadata({ data: "json, name=vpcConnector" })
  vpcConnector?: string;

  @SpeakeasyMetadata({ data: "json, name=vpcConnectorEgressSettings" })
  vpcConnectorEgressSettings?: CloudFunctionVpcConnectorEgressSettingsEnum;
}
