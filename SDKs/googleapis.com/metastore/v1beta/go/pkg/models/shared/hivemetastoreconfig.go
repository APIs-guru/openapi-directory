package shared

type HiveMetastoreConfigEndpointProtocolEnum string

const (
	HiveMetastoreConfigEndpointProtocolEnumEndpointProtocolUnspecified HiveMetastoreConfigEndpointProtocolEnum = "ENDPOINT_PROTOCOL_UNSPECIFIED"
	HiveMetastoreConfigEndpointProtocolEnumThrift                      HiveMetastoreConfigEndpointProtocolEnum = "THRIFT"
	HiveMetastoreConfigEndpointProtocolEnumGrpc                        HiveMetastoreConfigEndpointProtocolEnum = "GRPC"
)

type HiveMetastoreConfig struct {
	AuxiliaryVersions map[string]AuxiliaryVersionConfig        `json:"auxiliaryVersions"`
	ConfigOverrides   map[string]string                        `json:"configOverrides"`
	EndpointProtocol  *HiveMetastoreConfigEndpointProtocolEnum `json:"endpointProtocol"`
	KerberosConfig    *KerberosConfig                          `json:"kerberosConfig"`
	Version           *string                                  `json:"version"`
}
