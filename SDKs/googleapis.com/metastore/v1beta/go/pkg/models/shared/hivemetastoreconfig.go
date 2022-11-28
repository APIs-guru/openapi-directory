package shared

type HiveMetastoreConfigEndpointProtocolEnum string

const (
	HiveMetastoreConfigEndpointProtocolEnumEndpointProtocolUnspecified HiveMetastoreConfigEndpointProtocolEnum = "ENDPOINT_PROTOCOL_UNSPECIFIED"
	HiveMetastoreConfigEndpointProtocolEnumThrift                      HiveMetastoreConfigEndpointProtocolEnum = "THRIFT"
	HiveMetastoreConfigEndpointProtocolEnumGrpc                        HiveMetastoreConfigEndpointProtocolEnum = "GRPC"
)

// HiveMetastoreConfig
// Specifies configuration information specific to running Hive metastore software as the metastore service.
type HiveMetastoreConfig struct {
	AuxiliaryVersions map[string]AuxiliaryVersionConfig        `json:"auxiliaryVersions,omitempty"`
	ConfigOverrides   map[string]string                        `json:"configOverrides,omitempty"`
	EndpointProtocol  *HiveMetastoreConfigEndpointProtocolEnum `json:"endpointProtocol,omitempty"`
	KerberosConfig    *KerberosConfig                          `json:"kerberosConfig,omitempty"`
	Version           *string                                  `json:"version,omitempty"`
}

// HiveMetastoreConfigInput
// Specifies configuration information specific to running Hive metastore software as the metastore service.
type HiveMetastoreConfigInput struct {
	AuxiliaryVersions map[string]AuxiliaryVersionConfigInput   `json:"auxiliaryVersions,omitempty"`
	ConfigOverrides   map[string]string                        `json:"configOverrides,omitempty"`
	EndpointProtocol  *HiveMetastoreConfigEndpointProtocolEnum `json:"endpointProtocol,omitempty"`
	KerberosConfig    *KerberosConfig                          `json:"kerberosConfig,omitempty"`
	Version           *string                                  `json:"version,omitempty"`
}
