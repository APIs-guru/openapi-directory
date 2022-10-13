package shared

type CreateDatabaseRequestDatabaseDialectEnum string

const (
	CreateDatabaseRequestDatabaseDialectEnumDatabaseDialectUnspecified CreateDatabaseRequestDatabaseDialectEnum = "DATABASE_DIALECT_UNSPECIFIED"
	CreateDatabaseRequestDatabaseDialectEnumGoogleStandardSQL          CreateDatabaseRequestDatabaseDialectEnum = "GOOGLE_STANDARD_SQL"
	CreateDatabaseRequestDatabaseDialectEnumPostgresql                 CreateDatabaseRequestDatabaseDialectEnum = "POSTGRESQL"
)

type CreateDatabaseRequest struct {
	CreateStatement  *string                                   `json:"createStatement"`
	DatabaseDialect  *CreateDatabaseRequestDatabaseDialectEnum `json:"databaseDialect"`
	EncryptionConfig *EncryptionConfig                         `json:"encryptionConfig"`
	ExtraStatements  []string                                  `json:"extraStatements"`
}
