package shared

type DatabaseTypeEngineEnum string

const (
	DatabaseTypeEngineEnumDatabaseEngineUnspecified DatabaseTypeEngineEnum = "DATABASE_ENGINE_UNSPECIFIED"
	DatabaseTypeEngineEnumMysql                     DatabaseTypeEngineEnum = "MYSQL"
	DatabaseTypeEngineEnumPostgresql                DatabaseTypeEngineEnum = "POSTGRESQL"
)

type DatabaseTypeProviderEnum string

const (
	DatabaseTypeProviderEnumDatabaseProviderUnspecified DatabaseTypeProviderEnum = "DATABASE_PROVIDER_UNSPECIFIED"
	DatabaseTypeProviderEnumCloudsql                    DatabaseTypeProviderEnum = "CLOUDSQL"
	DatabaseTypeProviderEnumRds                         DatabaseTypeProviderEnum = "RDS"
	DatabaseTypeProviderEnumAurora                      DatabaseTypeProviderEnum = "AURORA"
	DatabaseTypeProviderEnumAlloydb                     DatabaseTypeProviderEnum = "ALLOYDB"
)

// DatabaseType
// A message defining the database engine and provider.
type DatabaseType struct {
	Engine   *DatabaseTypeEngineEnum   `json:"engine,omitempty"`
	Provider *DatabaseTypeProviderEnum `json:"provider,omitempty"`
}
