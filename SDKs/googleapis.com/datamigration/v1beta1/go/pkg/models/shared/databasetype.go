package shared




type DatabaseTypeEngineEnum string

const (
    DatabaseTypeEngineEnumDatabaseEngineUnspecified DatabaseTypeEngineEnum = "DATABASE_ENGINE_UNSPECIFIED"
DatabaseTypeEngineEnumMysql DatabaseTypeEngineEnum = "MYSQL"
)



type DatabaseTypeProviderEnum string

const (
    DatabaseTypeProviderEnumDatabaseProviderUnspecified DatabaseTypeProviderEnum = "DATABASE_PROVIDER_UNSPECIFIED"
DatabaseTypeProviderEnumCloudsql DatabaseTypeProviderEnum = "CLOUDSQL"
DatabaseTypeProviderEnumRds DatabaseTypeProviderEnum = "RDS"
)


type DatabaseType struct {
    Engine *DatabaseTypeEngineEnum `json:"engine,omitempty"`
    Provider *DatabaseTypeProviderEnum `json:"provider,omitempty"`
    
}

