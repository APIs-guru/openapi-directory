package shared

type NetworkingConfigConnectionTypeEnum string

const (
	NetworkingConfigConnectionTypeEnumConnectionTypeUnspecified NetworkingConfigConnectionTypeEnum = "CONNECTION_TYPE_UNSPECIFIED"
	NetworkingConfigConnectionTypeEnumVpcPeering                NetworkingConfigConnectionTypeEnum = "VPC_PEERING"
	NetworkingConfigConnectionTypeEnumPrivateServiceConnect     NetworkingConfigConnectionTypeEnum = "PRIVATE_SERVICE_CONNECT"
)

// NetworkingConfig
// Configuration options for networking connections in the Composer 2 environment.
type NetworkingConfig struct {
	ConnectionType *NetworkingConfigConnectionTypeEnum `json:"connectionType,omitempty"`
}
