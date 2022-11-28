package shared

type EnvironmentConfigEnvironmentSizeEnum string

const (
	EnvironmentConfigEnvironmentSizeEnumEnvironmentSizeUnspecified EnvironmentConfigEnvironmentSizeEnum = "ENVIRONMENT_SIZE_UNSPECIFIED"
	EnvironmentConfigEnvironmentSizeEnumEnvironmentSizeSmall       EnvironmentConfigEnvironmentSizeEnum = "ENVIRONMENT_SIZE_SMALL"
	EnvironmentConfigEnvironmentSizeEnumEnvironmentSizeMedium      EnvironmentConfigEnvironmentSizeEnum = "ENVIRONMENT_SIZE_MEDIUM"
	EnvironmentConfigEnvironmentSizeEnumEnvironmentSizeLarge       EnvironmentConfigEnvironmentSizeEnum = "ENVIRONMENT_SIZE_LARGE"
)

// EnvironmentConfig
// Configuration information for an environment.
type EnvironmentConfig struct {
	AirflowURI                     *string                               `json:"airflowUri,omitempty"`
	DagGcsPrefix                   *string                               `json:"dagGcsPrefix,omitempty"`
	DatabaseConfig                 *DatabaseConfig                       `json:"databaseConfig,omitempty"`
	EncryptionConfig               *EncryptionConfig                     `json:"encryptionConfig,omitempty"`
	EnvironmentSize                *EnvironmentConfigEnvironmentSizeEnum `json:"environmentSize,omitempty"`
	GkeCluster                     *string                               `json:"gkeCluster,omitempty"`
	MaintenanceWindow              *MaintenanceWindow                    `json:"maintenanceWindow,omitempty"`
	MasterAuthorizedNetworksConfig *MasterAuthorizedNetworksConfig       `json:"masterAuthorizedNetworksConfig,omitempty"`
	NodeConfig                     *NodeConfig                           `json:"nodeConfig,omitempty"`
	NodeCount                      *int32                                `json:"nodeCount,omitempty"`
	PrivateEnvironmentConfig       *PrivateEnvironmentConfig             `json:"privateEnvironmentConfig,omitempty"`
	SoftwareConfig                 *SoftwareConfig                       `json:"softwareConfig,omitempty"`
	WebServerConfig                *WebServerConfig                      `json:"webServerConfig,omitempty"`
	WebServerNetworkAccessControl  *WebServerNetworkAccessControl        `json:"webServerNetworkAccessControl,omitempty"`
	WorkloadsConfig                *WorkloadsConfig                      `json:"workloadsConfig,omitempty"`
}

// EnvironmentConfigInput
// Configuration information for an environment.
type EnvironmentConfigInput struct {
	AirflowURI                     *string                               `json:"airflowUri,omitempty"`
	DagGcsPrefix                   *string                               `json:"dagGcsPrefix,omitempty"`
	DatabaseConfig                 *DatabaseConfig                       `json:"databaseConfig,omitempty"`
	EncryptionConfig               *EncryptionConfig                     `json:"encryptionConfig,omitempty"`
	EnvironmentSize                *EnvironmentConfigEnvironmentSizeEnum `json:"environmentSize,omitempty"`
	GkeCluster                     *string                               `json:"gkeCluster,omitempty"`
	MaintenanceWindow              *MaintenanceWindow                    `json:"maintenanceWindow,omitempty"`
	MasterAuthorizedNetworksConfig *MasterAuthorizedNetworksConfig       `json:"masterAuthorizedNetworksConfig,omitempty"`
	NodeConfig                     *NodeConfig                           `json:"nodeConfig,omitempty"`
	NodeCount                      *int32                                `json:"nodeCount,omitempty"`
	PrivateEnvironmentConfig       *PrivateEnvironmentConfigInput        `json:"privateEnvironmentConfig,omitempty"`
	SoftwareConfig                 *SoftwareConfig                       `json:"softwareConfig,omitempty"`
	WebServerConfig                *WebServerConfig                      `json:"webServerConfig,omitempty"`
	WebServerNetworkAccessControl  *WebServerNetworkAccessControl        `json:"webServerNetworkAccessControl,omitempty"`
	WorkloadsConfig                *WorkloadsConfig                      `json:"workloadsConfig,omitempty"`
}
