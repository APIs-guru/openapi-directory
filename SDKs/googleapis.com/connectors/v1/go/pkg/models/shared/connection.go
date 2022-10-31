package shared

type Connection struct {
	AuthConfig         *AuthConfig         `json:"authConfig,omitempty"`
	ConfigVariables    []ConfigVariable    `json:"configVariables,omitempty"`
	ConnectorVersion   *string             `json:"connectorVersion,omitempty"`
	CreateTime         *string             `json:"createTime,omitempty"`
	Description        *string             `json:"description,omitempty"`
	DestinationConfigs []DestinationConfig `json:"destinationConfigs,omitempty"`
	EnvoyImageLocation *string             `json:"envoyImageLocation,omitempty"`
	ImageLocation      *string             `json:"imageLocation,omitempty"`
	Labels             map[string]string   `json:"labels,omitempty"`
	LockConfig         *LockConfig         `json:"lockConfig,omitempty"`
	Name               *string             `json:"name,omitempty"`
	NodeConfig         *NodeConfig         `json:"nodeConfig,omitempty"`
	ServiceAccount     *string             `json:"serviceAccount,omitempty"`
	ServiceDirectory   *string             `json:"serviceDirectory,omitempty"`
	Status             *ConnectionStatus   `json:"status,omitempty"`
	Suspended          *bool               `json:"suspended,omitempty"`
	UpdateTime         *string             `json:"updateTime,omitempty"`
}
