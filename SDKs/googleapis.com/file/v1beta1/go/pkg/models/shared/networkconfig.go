package shared

type NetworkConfigConnectModeEnum string

const (
	NetworkConfigConnectModeEnumConnectModeUnspecified NetworkConfigConnectModeEnum = "CONNECT_MODE_UNSPECIFIED"
	NetworkConfigConnectModeEnumDirectPeering          NetworkConfigConnectModeEnum = "DIRECT_PEERING"
	NetworkConfigConnectModeEnumPrivateServiceAccess   NetworkConfigConnectModeEnum = "PRIVATE_SERVICE_ACCESS"
)

type NetworkConfigModesEnum string

const (
	NetworkConfigModesEnumAddressModeUnspecified NetworkConfigModesEnum = "ADDRESS_MODE_UNSPECIFIED"
	NetworkConfigModesEnumModeIpv4               NetworkConfigModesEnum = "MODE_IPV4"
)

type NetworkConfig struct {
	ConnectMode     *NetworkConfigConnectModeEnum `json:"connectMode"`
	IPAddresses     []string                      `json:"ipAddresses"`
	Modes           []NetworkConfigModesEnum      `json:"modes"`
	Network         *string                       `json:"network"`
	ReservedIPRange *string                       `json:"reservedIpRange"`
}
