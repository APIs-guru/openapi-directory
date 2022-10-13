package shared

type EnvironmentConfigEnvironmentSizeEnum string

const (
	EnvironmentConfigEnvironmentSizeEnumEnvironmentSizeUnspecified EnvironmentConfigEnvironmentSizeEnum = "ENVIRONMENT_SIZE_UNSPECIFIED"
	EnvironmentConfigEnvironmentSizeEnumEnvironmentSizeSmall       EnvironmentConfigEnvironmentSizeEnum = "ENVIRONMENT_SIZE_SMALL"
	EnvironmentConfigEnvironmentSizeEnumEnvironmentSizeMedium      EnvironmentConfigEnvironmentSizeEnum = "ENVIRONMENT_SIZE_MEDIUM"
	EnvironmentConfigEnvironmentSizeEnumEnvironmentSizeLarge       EnvironmentConfigEnvironmentSizeEnum = "ENVIRONMENT_SIZE_LARGE"
)

type EnvironmentConfig struct {
	AirflowURI                     *string                               `json:"airflowUri"`
	DagGcsPrefix                   *string                               `json:"dagGcsPrefix"`
	DatabaseConfig                 *DatabaseConfig                       `json:"databaseConfig"`
	EncryptionConfig               *EncryptionConfig                     `json:"encryptionConfig"`
	EnvironmentSize                *EnvironmentConfigEnvironmentSizeEnum `json:"environmentSize"`
	GkeCluster                     *string                               `json:"gkeCluster"`
	MaintenanceWindow              *MaintenanceWindow                    `json:"maintenanceWindow"`
	MasterAuthorizedNetworksConfig *MasterAuthorizedNetworksConfig       `json:"masterAuthorizedNetworksConfig"`
	NodeConfig                     *NodeConfig                           `json:"nodeConfig"`
	NodeCount                      *int32                                `json:"nodeCount"`
	PrivateEnvironmentConfig       *PrivateEnvironmentConfig             `json:"privateEnvironmentConfig"`
	SoftwareConfig                 *SoftwareConfig                       `json:"softwareConfig"`
	WebServerConfig                *WebServerConfig                      `json:"webServerConfig"`
	WebServerNetworkAccessControl  *WebServerNetworkAccessControl        `json:"webServerNetworkAccessControl"`
	WorkloadsConfig                *WorkloadsConfig                      `json:"workloadsConfig"`
}
