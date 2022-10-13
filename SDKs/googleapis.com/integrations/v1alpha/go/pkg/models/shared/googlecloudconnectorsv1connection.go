package shared

type GoogleCloudConnectorsV1Connection struct {
	AuthConfig         *GoogleCloudConnectorsV1AuthConfig         `json:"authConfig"`
	ConfigVariables    []GoogleCloudConnectorsV1ConfigVariable    `json:"configVariables"`
	ConnectorVersion   *string                                    `json:"connectorVersion"`
	CreateTime         *string                                    `json:"createTime"`
	Description        *string                                    `json:"description"`
	DestinationConfigs []GoogleCloudConnectorsV1DestinationConfig `json:"destinationConfigs"`
	EnvoyImageLocation *string                                    `json:"envoyImageLocation"`
	ImageLocation      *string                                    `json:"imageLocation"`
	Labels             map[string]string                          `json:"labels"`
	LockConfig         *GoogleCloudConnectorsV1LockConfig         `json:"lockConfig"`
	Name               *string                                    `json:"name"`
	NodeConfig         *GoogleCloudConnectorsV1NodeConfig         `json:"nodeConfig"`
	ServiceAccount     *string                                    `json:"serviceAccount"`
	ServiceDirectory   *string                                    `json:"serviceDirectory"`
	Status             *GoogleCloudConnectorsV1ConnectionStatus   `json:"status"`
	Suspended          *bool                                      `json:"suspended"`
	UpdateTime         *string                                    `json:"updateTime"`
}
