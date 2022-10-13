package shared

type PostgreSQLConnectionProfileNetworkArchitectureEnum string

const (
	PostgreSQLConnectionProfileNetworkArchitectureEnumNetworkArchitectureUnspecified     PostgreSQLConnectionProfileNetworkArchitectureEnum = "NETWORK_ARCHITECTURE_UNSPECIFIED"
	PostgreSQLConnectionProfileNetworkArchitectureEnumNetworkArchitectureOldCsqlProducer PostgreSQLConnectionProfileNetworkArchitectureEnum = "NETWORK_ARCHITECTURE_OLD_CSQL_PRODUCER"
	PostgreSQLConnectionProfileNetworkArchitectureEnumNetworkArchitectureNewCsqlProducer PostgreSQLConnectionProfileNetworkArchitectureEnum = "NETWORK_ARCHITECTURE_NEW_CSQL_PRODUCER"
)

type PostgreSQLConnectionProfile struct {
	CloudSQLID          *string                                             `json:"cloudSqlId"`
	Host                *string                                             `json:"host"`
	NetworkArchitecture *PostgreSQLConnectionProfileNetworkArchitectureEnum `json:"networkArchitecture"`
	Password            *string                                             `json:"password"`
	PasswordSet         *bool                                               `json:"passwordSet"`
	Port                *int32                                              `json:"port"`
	Ssl                 *SslConfig                                          `json:"ssl"`
	Username            *string                                             `json:"username"`
}
