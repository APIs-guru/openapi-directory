package shared

type PostgreSQLConnectionProfileNetworkArchitectureEnum string

const (
	PostgreSQLConnectionProfileNetworkArchitectureEnumNetworkArchitectureUnspecified     PostgreSQLConnectionProfileNetworkArchitectureEnum = "NETWORK_ARCHITECTURE_UNSPECIFIED"
	PostgreSQLConnectionProfileNetworkArchitectureEnumNetworkArchitectureOldCsqlProducer PostgreSQLConnectionProfileNetworkArchitectureEnum = "NETWORK_ARCHITECTURE_OLD_CSQL_PRODUCER"
	PostgreSQLConnectionProfileNetworkArchitectureEnumNetworkArchitectureNewCsqlProducer PostgreSQLConnectionProfileNetworkArchitectureEnum = "NETWORK_ARCHITECTURE_NEW_CSQL_PRODUCER"
)

type PostgreSQLConnectionProfile struct {
	CloudSQLID          *string                                             `json:"cloudSqlId,omitempty"`
	Host                *string                                             `json:"host,omitempty"`
	NetworkArchitecture *PostgreSQLConnectionProfileNetworkArchitectureEnum `json:"networkArchitecture,omitempty"`
	Password            *string                                             `json:"password,omitempty"`
	PasswordSet         *bool                                               `json:"passwordSet,omitempty"`
	Port                *int32                                              `json:"port,omitempty"`
	Ssl                 *SslConfig                                          `json:"ssl,omitempty"`
	Username            *string                                             `json:"username,omitempty"`
}
