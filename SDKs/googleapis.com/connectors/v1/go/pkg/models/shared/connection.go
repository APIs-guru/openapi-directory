package shared

type Connection struct {
	AuthConfig         *AuthConfig         `json:"authConfig"`
	ConfigVariables    []ConfigVariable    `json:"configVariables"`
	ConnectorVersion   *string             `json:"connectorVersion"`
	CreateTime         *string             `json:"createTime"`
	Description        *string             `json:"description"`
	DestinationConfigs []DestinationConfig `json:"destinationConfigs"`
	EnvoyImageLocation *string             `json:"envoyImageLocation"`
	ImageLocation      *string             `json:"imageLocation"`
	Labels             map[string]string   `json:"labels"`
	LockConfig         *LockConfig         `json:"lockConfig"`
	Name               *string             `json:"name"`
	NodeConfig         *NodeConfig         `json:"nodeConfig"`
	ServiceAccount     *string             `json:"serviceAccount"`
	ServiceDirectory   *string             `json:"serviceDirectory"`
	Status             *ConnectionStatus   `json:"status"`
	Suspended          *bool               `json:"suspended"`
	UpdateTime         *string             `json:"updateTime"`
}
