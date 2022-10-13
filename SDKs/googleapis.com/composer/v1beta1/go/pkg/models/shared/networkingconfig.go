package shared

type NetworkingConfigConnectionTypeEnum string

const (
	NetworkingConfigConnectionTypeEnumConnectionTypeUnspecified NetworkingConfigConnectionTypeEnum = "CONNECTION_TYPE_UNSPECIFIED"
	NetworkingConfigConnectionTypeEnumVpcPeering                NetworkingConfigConnectionTypeEnum = "VPC_PEERING"
	NetworkingConfigConnectionTypeEnumPrivateServiceConnect     NetworkingConfigConnectionTypeEnum = "PRIVATE_SERVICE_CONNECT"
)

type NetworkingConfig struct {
	ConnectionType *NetworkingConfigConnectionTypeEnum `json:"connectionType"`
}
