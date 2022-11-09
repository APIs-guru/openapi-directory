import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EventTrigger } from "./eventtrigger";
import { HttpsTrigger } from "./httpstrigger";
import { SecretEnvVar } from "./secretenvvar";
import { SecretVolume } from "./secretvolume";
import { SourceRepository } from "./sourcerepository";
export declare enum CloudFunctionDockerRegistryEnum {
    DockerRegistryUnspecified = "DOCKER_REGISTRY_UNSPECIFIED",
    ContainerRegistry = "CONTAINER_REGISTRY",
    ArtifactRegistry = "ARTIFACT_REGISTRY"
}
export declare enum CloudFunctionIngressSettingsEnum {
    IngressSettingsUnspecified = "INGRESS_SETTINGS_UNSPECIFIED",
    AllowAll = "ALLOW_ALL",
    AllowInternalOnly = "ALLOW_INTERNAL_ONLY",
    AllowInternalAndGclb = "ALLOW_INTERNAL_AND_GCLB"
}
export declare enum CloudFunctionStatusEnum {
    CloudFunctionStatusUnspecified = "CLOUD_FUNCTION_STATUS_UNSPECIFIED",
    Active = "ACTIVE",
    Offline = "OFFLINE",
    DeployInProgress = "DEPLOY_IN_PROGRESS",
    DeleteInProgress = "DELETE_IN_PROGRESS",
    Unknown = "UNKNOWN"
}
export declare enum CloudFunctionVpcConnectorEgressSettingsEnum {
    VpcConnectorEgressSettingsUnspecified = "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED",
    PrivateRangesOnly = "PRIVATE_RANGES_ONLY",
    AllTraffic = "ALL_TRAFFIC"
}
/**
 * Describes a Cloud Function that contains user computation executed in response to an event. It encapsulate function and triggers configurations.
**/
export declare class CloudFunction extends SpeakeasyBase {
    availableMemoryMb?: number;
    buildEnvironmentVariables?: Map<string, string>;
    buildId?: string;
    buildName?: string;
    buildWorkerPool?: string;
    description?: string;
    dockerRegistry?: CloudFunctionDockerRegistryEnum;
    dockerRepository?: string;
    entryPoint?: string;
    environmentVariables?: Map<string, string>;
    eventTrigger?: EventTrigger;
    httpsTrigger?: HttpsTrigger;
    ingressSettings?: CloudFunctionIngressSettingsEnum;
    kmsKeyName?: string;
    labels?: Map<string, string>;
    maxInstances?: number;
    minInstances?: number;
    name?: string;
    network?: string;
    runtime?: string;
    secretEnvironmentVariables?: SecretEnvVar[];
    secretVolumes?: SecretVolume[];
    serviceAccountEmail?: string;
    sourceArchiveUrl?: string;
    sourceRepository?: SourceRepository;
    sourceToken?: string;
    sourceUploadUrl?: string;
    status?: CloudFunctionStatusEnum;
    timeout?: string;
    updateTime?: string;
    versionId?: string;
    vpcConnector?: string;
    vpcConnectorEgressSettings?: CloudFunctionVpcConnectorEgressSettingsEnum;
}
