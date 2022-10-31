package shared

type GoogleCloudConnectorsV1Connection struct {
	AuthConfig         *GoogleCloudConnectorsV1AuthConfig         `json:"authConfig,omitempty"`
	ConfigVariables    []GoogleCloudConnectorsV1ConfigVariable    `json:"configVariables,omitempty"`
	ConnectorVersion   *string                                    `json:"connectorVersion,omitempty"`
	CreateTime         *string                                    `json:"createTime,omitempty"`
	Description        *string                                    `json:"description,omitempty"`
	DestinationConfigs []GoogleCloudConnectorsV1DestinationConfig `json:"destinationConfigs,omitempty"`
	EnvoyImageLocation *string                                    `json:"envoyImageLocation,omitempty"`
	ImageLocation      *string                                    `json:"imageLocation,omitempty"`
	Labels             map[string]string                          `json:"labels,omitempty"`
	LockConfig         *GoogleCloudConnectorsV1LockConfig         `json:"lockConfig,omitempty"`
	Name               *string                                    `json:"name,omitempty"`
	NodeConfig         *GoogleCloudConnectorsV1NodeConfig         `json:"nodeConfig,omitempty"`
	ServiceAccount     *string                                    `json:"serviceAccount,omitempty"`
	ServiceDirectory   *string                                    `json:"serviceDirectory,omitempty"`
	Status             *GoogleCloudConnectorsV1ConnectionStatus   `json:"status,omitempty"`
	Suspended          *bool                                      `json:"suspended,omitempty"`
	UpdateTime         *string                                    `json:"updateTime,omitempty"`
}
