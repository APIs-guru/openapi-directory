package shared

type ServiceConfigIngressSettingsEnum string

const (
	ServiceConfigIngressSettingsEnumIngressSettingsUnspecified ServiceConfigIngressSettingsEnum = "INGRESS_SETTINGS_UNSPECIFIED"
	ServiceConfigIngressSettingsEnumAllowAll                   ServiceConfigIngressSettingsEnum = "ALLOW_ALL"
	ServiceConfigIngressSettingsEnumAllowInternalOnly          ServiceConfigIngressSettingsEnum = "ALLOW_INTERNAL_ONLY"
	ServiceConfigIngressSettingsEnumAllowInternalAndGclb       ServiceConfigIngressSettingsEnum = "ALLOW_INTERNAL_AND_GCLB"
)

type ServiceConfigVpcConnectorEgressSettingsEnum string

const (
	ServiceConfigVpcConnectorEgressSettingsEnumVpcConnectorEgressSettingsUnspecified ServiceConfigVpcConnectorEgressSettingsEnum = "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED"
	ServiceConfigVpcConnectorEgressSettingsEnumPrivateRangesOnly                     ServiceConfigVpcConnectorEgressSettingsEnum = "PRIVATE_RANGES_ONLY"
	ServiceConfigVpcConnectorEgressSettingsEnumAllTraffic                            ServiceConfigVpcConnectorEgressSettingsEnum = "ALL_TRAFFIC"
)

type ServiceConfig struct {
	AllTrafficOnLatestRevision *bool                                        `json:"allTrafficOnLatestRevision"`
	AvailableMemory            *string                                      `json:"availableMemory"`
	EnvironmentVariables       map[string]string                            `json:"environmentVariables"`
	IngressSettings            *ServiceConfigIngressSettingsEnum            `json:"ingressSettings"`
	MaxInstanceCount           *int32                                       `json:"maxInstanceCount"`
	MinInstanceCount           *int32                                       `json:"minInstanceCount"`
	Revision                   *string                                      `json:"revision"`
	SecretEnvironmentVariables []SecretEnvVar                               `json:"secretEnvironmentVariables"`
	SecretVolumes              []SecretVolume                               `json:"secretVolumes"`
	Service                    *string                                      `json:"service"`
	ServiceAccountEmail        *string                                      `json:"serviceAccountEmail"`
	TimeoutSeconds             *int32                                       `json:"timeoutSeconds"`
	URI                        *string                                      `json:"uri"`
	VpcConnector               *string                                      `json:"vpcConnector"`
	VpcConnectorEgressSettings *ServiceConfigVpcConnectorEgressSettingsEnum `json:"vpcConnectorEgressSettings"`
}
