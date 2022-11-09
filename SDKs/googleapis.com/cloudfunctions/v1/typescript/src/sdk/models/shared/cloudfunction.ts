import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventTrigger } from "./eventtrigger";
import { HttpsTrigger } from "./httpstrigger";
import { SecretEnvVar } from "./secretenvvar";
import { SecretVolume } from "./secretvolume";
import { SourceRepository } from "./sourcerepository";

export enum CloudFunctionDockerRegistryEnum {
    DockerRegistryUnspecified = "DOCKER_REGISTRY_UNSPECIFIED"
,    ContainerRegistry = "CONTAINER_REGISTRY"
,    ArtifactRegistry = "ARTIFACT_REGISTRY"
}

export enum CloudFunctionIngressSettingsEnum {
    IngressSettingsUnspecified = "INGRESS_SETTINGS_UNSPECIFIED"
,    AllowAll = "ALLOW_ALL"
,    AllowInternalOnly = "ALLOW_INTERNAL_ONLY"
,    AllowInternalAndGclb = "ALLOW_INTERNAL_AND_GCLB"
}

export enum CloudFunctionStatusEnum {
    CloudFunctionStatusUnspecified = "CLOUD_FUNCTION_STATUS_UNSPECIFIED"
,    Active = "ACTIVE"
,    Offline = "OFFLINE"
,    DeployInProgress = "DEPLOY_IN_PROGRESS"
,    DeleteInProgress = "DELETE_IN_PROGRESS"
,    Unknown = "UNKNOWN"
}

export enum CloudFunctionVpcConnectorEgressSettingsEnum {
    VpcConnectorEgressSettingsUnspecified = "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED"
,    PrivateRangesOnly = "PRIVATE_RANGES_ONLY"
,    AllTraffic = "ALL_TRAFFIC"
}


// CloudFunction
/** 
 * Describes a Cloud Function that contains user computation executed in response to an event. It encapsulate function and triggers configurations.
**/
export class CloudFunction extends SpeakeasyBase {
  @Metadata({ data: "json, name=availableMemoryMb" })
  availableMemoryMb?: number;

  @Metadata({ data: "json, name=buildEnvironmentVariables" })
  buildEnvironmentVariables?: Map<string, string>;

  @Metadata({ data: "json, name=buildId" })
  buildId?: string;

  @Metadata({ data: "json, name=buildName" })
  buildName?: string;

  @Metadata({ data: "json, name=buildWorkerPool" })
  buildWorkerPool?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=dockerRegistry" })
  dockerRegistry?: CloudFunctionDockerRegistryEnum;

  @Metadata({ data: "json, name=dockerRepository" })
  dockerRepository?: string;

  @Metadata({ data: "json, name=entryPoint" })
  entryPoint?: string;

  @Metadata({ data: "json, name=environmentVariables" })
  environmentVariables?: Map<string, string>;

  @Metadata({ data: "json, name=eventTrigger" })
  eventTrigger?: EventTrigger;

  @Metadata({ data: "json, name=httpsTrigger" })
  httpsTrigger?: HttpsTrigger;

  @Metadata({ data: "json, name=ingressSettings" })
  ingressSettings?: CloudFunctionIngressSettingsEnum;

  @Metadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=maxInstances" })
  maxInstances?: number;

  @Metadata({ data: "json, name=minInstances" })
  minInstances?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=runtime" })
  runtime?: string;

  @Metadata({ data: "json, name=secretEnvironmentVariables", elemType: shared.SecretEnvVar })
  secretEnvironmentVariables?: SecretEnvVar[];

  @Metadata({ data: "json, name=secretVolumes", elemType: shared.SecretVolume })
  secretVolumes?: SecretVolume[];

  @Metadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

  @Metadata({ data: "json, name=sourceArchiveUrl" })
  sourceArchiveUrl?: string;

  @Metadata({ data: "json, name=sourceRepository" })
  sourceRepository?: SourceRepository;

  @Metadata({ data: "json, name=sourceToken" })
  sourceToken?: string;

  @Metadata({ data: "json, name=sourceUploadUrl" })
  sourceUploadUrl?: string;

  @Metadata({ data: "json, name=status" })
  status?: CloudFunctionStatusEnum;

  @Metadata({ data: "json, name=timeout" })
  timeout?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=versionId" })
  versionId?: string;

  @Metadata({ data: "json, name=vpcConnector" })
  vpcConnector?: string;

  @Metadata({ data: "json, name=vpcConnectorEgressSettings" })
  vpcConnectorEgressSettings?: CloudFunctionVpcConnectorEgressSettingsEnum;
}
