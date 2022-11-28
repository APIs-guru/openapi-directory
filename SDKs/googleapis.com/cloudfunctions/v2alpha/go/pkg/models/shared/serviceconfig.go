package shared

type ServiceConfigIngressSettingsEnum string

const (
	ServiceConfigIngressSettingsEnumIngressSettingsUnspecified ServiceConfigIngressSettingsEnum = "INGRESS_SETTINGS_UNSPECIFIED"
	ServiceConfigIngressSettingsEnumAllowAll                   ServiceConfigIngressSettingsEnum = "ALLOW_ALL"
	ServiceConfigIngressSettingsEnumAllowInternalOnly          ServiceConfigIngressSettingsEnum = "ALLOW_INTERNAL_ONLY"
	ServiceConfigIngressSettingsEnumAllowInternalAndGclb       ServiceConfigIngressSettingsEnum = "ALLOW_INTERNAL_AND_GCLB"
)

type ServiceConfigSecurityLevelEnum string

const (
	ServiceConfigSecurityLevelEnumSecurityLevelUnspecified ServiceConfigSecurityLevelEnum = "SECURITY_LEVEL_UNSPECIFIED"
	ServiceConfigSecurityLevelEnumSecureAlways             ServiceConfigSecurityLevelEnum = "SECURE_ALWAYS"
	ServiceConfigSecurityLevelEnumSecureOptional           ServiceConfigSecurityLevelEnum = "SECURE_OPTIONAL"
)

type ServiceConfigVpcConnectorEgressSettingsEnum string

const (
	ServiceConfigVpcConnectorEgressSettingsEnumVpcConnectorEgressSettingsUnspecified ServiceConfigVpcConnectorEgressSettingsEnum = "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED"
	ServiceConfigVpcConnectorEgressSettingsEnumPrivateRangesOnly                     ServiceConfigVpcConnectorEgressSettingsEnum = "PRIVATE_RANGES_ONLY"
	ServiceConfigVpcConnectorEgressSettingsEnumAllTraffic                            ServiceConfigVpcConnectorEgressSettingsEnum = "ALL_TRAFFIC"
)

// ServiceConfigInput
// Describes the Service being deployed. Currently Supported : Cloud Run (fully managed). Next tag: 23
type ServiceConfigInput struct {
	AllTrafficOnLatestRevision *bool                                        `json:"allTrafficOnLatestRevision,omitempty"`
	AvailableMemory            *string                                      `json:"availableMemory,omitempty"`
	EnvironmentVariables       map[string]string                            `json:"environmentVariables,omitempty"`
	IngressSettings            *ServiceConfigIngressSettingsEnum            `json:"ingressSettings,omitempty"`
	MaxInstanceCount           *int32                                       `json:"maxInstanceCount,omitempty"`
	MinInstanceCount           *int32                                       `json:"minInstanceCount,omitempty"`
	SecretEnvironmentVariables []SecretEnvVar                               `json:"secretEnvironmentVariables,omitempty"`
	SecretVolumes              []SecretVolume                               `json:"secretVolumes,omitempty"`
	SecurityLevel              *ServiceConfigSecurityLevelEnum              `json:"securityLevel,omitempty"`
	ServiceAccountEmail        *string                                      `json:"serviceAccountEmail,omitempty"`
	TimeoutSeconds             *int32                                       `json:"timeoutSeconds,omitempty"`
	VpcConnector               *string                                      `json:"vpcConnector,omitempty"`
	VpcConnectorEgressSettings *ServiceConfigVpcConnectorEgressSettingsEnum `json:"vpcConnectorEgressSettings,omitempty"`
}

// ServiceConfig
// Describes the Service being deployed. Currently Supported : Cloud Run (fully managed). Next tag: 23
type ServiceConfig struct {
	AllTrafficOnLatestRevision *bool                                        `json:"allTrafficOnLatestRevision,omitempty"`
	AvailableMemory            *string                                      `json:"availableMemory,omitempty"`
	EnvironmentVariables       map[string]string                            `json:"environmentVariables,omitempty"`
	IngressSettings            *ServiceConfigIngressSettingsEnum            `json:"ingressSettings,omitempty"`
	MaxInstanceCount           *int32                                       `json:"maxInstanceCount,omitempty"`
	MinInstanceCount           *int32                                       `json:"minInstanceCount,omitempty"`
	Revision                   *string                                      `json:"revision,omitempty"`
	SecretEnvironmentVariables []SecretEnvVar                               `json:"secretEnvironmentVariables,omitempty"`
	SecretVolumes              []SecretVolume                               `json:"secretVolumes,omitempty"`
	SecurityLevel              *ServiceConfigSecurityLevelEnum              `json:"securityLevel,omitempty"`
	Service                    *string                                      `json:"service,omitempty"`
	ServiceAccountEmail        *string                                      `json:"serviceAccountEmail,omitempty"`
	TimeoutSeconds             *int32                                       `json:"timeoutSeconds,omitempty"`
	URI                        *string                                      `json:"uri,omitempty"`
	VpcConnector               *string                                      `json:"vpcConnector,omitempty"`
	VpcConnectorEgressSettings *ServiceConfigVpcConnectorEgressSettingsEnum `json:"vpcConnectorEgressSettings,omitempty"`
}
