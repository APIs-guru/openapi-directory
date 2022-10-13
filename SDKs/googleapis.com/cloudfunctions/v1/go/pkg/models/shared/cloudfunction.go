package shared

type CloudFunctionDockerRegistryEnum string

const (
	CloudFunctionDockerRegistryEnumDockerRegistryUnspecified CloudFunctionDockerRegistryEnum = "DOCKER_REGISTRY_UNSPECIFIED"
	CloudFunctionDockerRegistryEnumContainerRegistry         CloudFunctionDockerRegistryEnum = "CONTAINER_REGISTRY"
	CloudFunctionDockerRegistryEnumArtifactRegistry          CloudFunctionDockerRegistryEnum = "ARTIFACT_REGISTRY"
)

type CloudFunctionIngressSettingsEnum string

const (
	CloudFunctionIngressSettingsEnumIngressSettingsUnspecified CloudFunctionIngressSettingsEnum = "INGRESS_SETTINGS_UNSPECIFIED"
	CloudFunctionIngressSettingsEnumAllowAll                   CloudFunctionIngressSettingsEnum = "ALLOW_ALL"
	CloudFunctionIngressSettingsEnumAllowInternalOnly          CloudFunctionIngressSettingsEnum = "ALLOW_INTERNAL_ONLY"
	CloudFunctionIngressSettingsEnumAllowInternalAndGclb       CloudFunctionIngressSettingsEnum = "ALLOW_INTERNAL_AND_GCLB"
)

type CloudFunctionStatusEnum string

const (
	CloudFunctionStatusEnumCloudFunctionStatusUnspecified CloudFunctionStatusEnum = "CLOUD_FUNCTION_STATUS_UNSPECIFIED"
	CloudFunctionStatusEnumActive                         CloudFunctionStatusEnum = "ACTIVE"
	CloudFunctionStatusEnumOffline                        CloudFunctionStatusEnum = "OFFLINE"
	CloudFunctionStatusEnumDeployInProgress               CloudFunctionStatusEnum = "DEPLOY_IN_PROGRESS"
	CloudFunctionStatusEnumDeleteInProgress               CloudFunctionStatusEnum = "DELETE_IN_PROGRESS"
	CloudFunctionStatusEnumUnknown                        CloudFunctionStatusEnum = "UNKNOWN"
)

type CloudFunctionVpcConnectorEgressSettingsEnum string

const (
	CloudFunctionVpcConnectorEgressSettingsEnumVpcConnectorEgressSettingsUnspecified CloudFunctionVpcConnectorEgressSettingsEnum = "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED"
	CloudFunctionVpcConnectorEgressSettingsEnumPrivateRangesOnly                     CloudFunctionVpcConnectorEgressSettingsEnum = "PRIVATE_RANGES_ONLY"
	CloudFunctionVpcConnectorEgressSettingsEnumAllTraffic                            CloudFunctionVpcConnectorEgressSettingsEnum = "ALL_TRAFFIC"
)

type CloudFunction struct {
	AvailableMemoryMb          *int32                                       `json:"availableMemoryMb"`
	BuildEnvironmentVariables  map[string]string                            `json:"buildEnvironmentVariables"`
	BuildID                    *string                                      `json:"buildId"`
	BuildName                  *string                                      `json:"buildName"`
	BuildWorkerPool            *string                                      `json:"buildWorkerPool"`
	Description                *string                                      `json:"description"`
	DockerRegistry             *CloudFunctionDockerRegistryEnum             `json:"dockerRegistry"`
	DockerRepository           *string                                      `json:"dockerRepository"`
	EntryPoint                 *string                                      `json:"entryPoint"`
	EnvironmentVariables       map[string]string                            `json:"environmentVariables"`
	EventTrigger               *EventTrigger                                `json:"eventTrigger"`
	HTTPSTrigger               *HTTPSTrigger                                `json:"httpsTrigger"`
	IngressSettings            *CloudFunctionIngressSettingsEnum            `json:"ingressSettings"`
	KmsKeyName                 *string                                      `json:"kmsKeyName"`
	Labels                     map[string]string                            `json:"labels"`
	MaxInstances               *int32                                       `json:"maxInstances"`
	MinInstances               *int32                                       `json:"minInstances"`
	Name                       *string                                      `json:"name"`
	Network                    *string                                      `json:"network"`
	Runtime                    *string                                      `json:"runtime"`
	SecretEnvironmentVariables []SecretEnvVar                               `json:"secretEnvironmentVariables"`
	SecretVolumes              []SecretVolume                               `json:"secretVolumes"`
	ServiceAccountEmail        *string                                      `json:"serviceAccountEmail"`
	SourceArchiveURL           *string                                      `json:"sourceArchiveUrl"`
	SourceRepository           *SourceRepository                            `json:"sourceRepository"`
	SourceToken                *string                                      `json:"sourceToken"`
	SourceUploadURL            *string                                      `json:"sourceUploadUrl"`
	Status                     *CloudFunctionStatusEnum                     `json:"status"`
	Timeout                    *string                                      `json:"timeout"`
	UpdateTime                 *string                                      `json:"updateTime"`
	VersionID                  *string                                      `json:"versionId"`
	VpcConnector               *string                                      `json:"vpcConnector"`
	VpcConnectorEgressSettings *CloudFunctionVpcConnectorEgressSettingsEnum `json:"vpcConnectorEgressSettings"`
}
