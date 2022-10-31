package shared




type CloudFunctionDockerRegistryEnum string

const (
    CloudFunctionDockerRegistryEnumDockerRegistryUnspecified CloudFunctionDockerRegistryEnum = "DOCKER_REGISTRY_UNSPECIFIED"
CloudFunctionDockerRegistryEnumContainerRegistry CloudFunctionDockerRegistryEnum = "CONTAINER_REGISTRY"
CloudFunctionDockerRegistryEnumArtifactRegistry CloudFunctionDockerRegistryEnum = "ARTIFACT_REGISTRY"
)



type CloudFunctionIngressSettingsEnum string

const (
    CloudFunctionIngressSettingsEnumIngressSettingsUnspecified CloudFunctionIngressSettingsEnum = "INGRESS_SETTINGS_UNSPECIFIED"
CloudFunctionIngressSettingsEnumAllowAll CloudFunctionIngressSettingsEnum = "ALLOW_ALL"
CloudFunctionIngressSettingsEnumAllowInternalOnly CloudFunctionIngressSettingsEnum = "ALLOW_INTERNAL_ONLY"
CloudFunctionIngressSettingsEnumAllowInternalAndGclb CloudFunctionIngressSettingsEnum = "ALLOW_INTERNAL_AND_GCLB"
)



type CloudFunctionStatusEnum string

const (
    CloudFunctionStatusEnumCloudFunctionStatusUnspecified CloudFunctionStatusEnum = "CLOUD_FUNCTION_STATUS_UNSPECIFIED"
CloudFunctionStatusEnumActive CloudFunctionStatusEnum = "ACTIVE"
CloudFunctionStatusEnumOffline CloudFunctionStatusEnum = "OFFLINE"
CloudFunctionStatusEnumDeployInProgress CloudFunctionStatusEnum = "DEPLOY_IN_PROGRESS"
CloudFunctionStatusEnumDeleteInProgress CloudFunctionStatusEnum = "DELETE_IN_PROGRESS"
CloudFunctionStatusEnumUnknown CloudFunctionStatusEnum = "UNKNOWN"
)



type CloudFunctionVpcConnectorEgressSettingsEnum string

const (
    CloudFunctionVpcConnectorEgressSettingsEnumVpcConnectorEgressSettingsUnspecified CloudFunctionVpcConnectorEgressSettingsEnum = "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED"
CloudFunctionVpcConnectorEgressSettingsEnumPrivateRangesOnly CloudFunctionVpcConnectorEgressSettingsEnum = "PRIVATE_RANGES_ONLY"
CloudFunctionVpcConnectorEgressSettingsEnumAllTraffic CloudFunctionVpcConnectorEgressSettingsEnum = "ALL_TRAFFIC"
)


type CloudFunction struct {
    AvailableMemoryMb *int32 `json:"availableMemoryMb,omitempty"`
    BuildEnvironmentVariables map[string]string `json:"buildEnvironmentVariables,omitempty"`
    BuildID *string `json:"buildId,omitempty"`
    BuildName *string `json:"buildName,omitempty"`
    BuildWorkerPool *string `json:"buildWorkerPool,omitempty"`
    Description *string `json:"description,omitempty"`
    DockerRegistry *CloudFunctionDockerRegistryEnum `json:"dockerRegistry,omitempty"`
    DockerRepository *string `json:"dockerRepository,omitempty"`
    EntryPoint *string `json:"entryPoint,omitempty"`
    EnvironmentVariables map[string]string `json:"environmentVariables,omitempty"`
    EventTrigger *EventTrigger `json:"eventTrigger,omitempty"`
    HTTPSTrigger *HTTPSTrigger `json:"httpsTrigger,omitempty"`
    IngressSettings *CloudFunctionIngressSettingsEnum `json:"ingressSettings,omitempty"`
    KmsKeyName *string `json:"kmsKeyName,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    MaxInstances *int32 `json:"maxInstances,omitempty"`
    MinInstances *int32 `json:"minInstances,omitempty"`
    Name *string `json:"name,omitempty"`
    Network *string `json:"network,omitempty"`
    Runtime *string `json:"runtime,omitempty"`
    SecretEnvironmentVariables []SecretEnvVar `json:"secretEnvironmentVariables,omitempty"`
    SecretVolumes []SecretVolume `json:"secretVolumes,omitempty"`
    ServiceAccountEmail *string `json:"serviceAccountEmail,omitempty"`
    SourceArchiveURL *string `json:"sourceArchiveUrl,omitempty"`
    SourceRepository *SourceRepository `json:"sourceRepository,omitempty"`
    SourceToken *string `json:"sourceToken,omitempty"`
    SourceUploadURL *string `json:"sourceUploadUrl,omitempty"`
    Status *CloudFunctionStatusEnum `json:"status,omitempty"`
    Timeout *string `json:"timeout,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    VersionID *string `json:"versionId,omitempty"`
    VpcConnector *string `json:"vpcConnector,omitempty"`
    VpcConnectorEgressSettings *CloudFunctionVpcConnectorEgressSettingsEnum `json:"vpcConnectorEgressSettings,omitempty"`
    
}

