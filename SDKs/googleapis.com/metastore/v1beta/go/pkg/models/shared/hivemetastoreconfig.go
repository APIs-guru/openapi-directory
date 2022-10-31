package shared

type HiveMetastoreConfigEndpointProtocolEnum string

const (
	HiveMetastoreConfigEndpointProtocolEnumEndpointProtocolUnspecified HiveMetastoreConfigEndpointProtocolEnum = "ENDPOINT_PROTOCOL_UNSPECIFIED"
	HiveMetastoreConfigEndpointProtocolEnumThrift                      HiveMetastoreConfigEndpointProtocolEnum = "THRIFT"
	HiveMetastoreConfigEndpointProtocolEnumGrpc                        HiveMetastoreConfigEndpointProtocolEnum = "GRPC"
)

type HiveMetastoreConfig struct {
	AuxiliaryVersions map[string]AuxiliaryVersionConfig        `json:"auxiliaryVersions,omitempty"`
	ConfigOverrides   map[string]string                        `json:"configOverrides,omitempty"`
	EndpointProtocol  *HiveMetastoreConfigEndpointProtocolEnum `json:"endpointProtocol,omitempty"`
	KerberosConfig    *KerberosConfig                          `json:"kerberosConfig,omitempty"`
	Version           *string                                  `json:"version,omitempty"`
}
