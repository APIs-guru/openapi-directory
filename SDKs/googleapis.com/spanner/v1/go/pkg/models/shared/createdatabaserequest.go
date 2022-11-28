package shared

type CreateDatabaseRequestDatabaseDialectEnum string

const (
	CreateDatabaseRequestDatabaseDialectEnumDatabaseDialectUnspecified CreateDatabaseRequestDatabaseDialectEnum = "DATABASE_DIALECT_UNSPECIFIED"
	CreateDatabaseRequestDatabaseDialectEnumGoogleStandardSQL          CreateDatabaseRequestDatabaseDialectEnum = "GOOGLE_STANDARD_SQL"
	CreateDatabaseRequestDatabaseDialectEnumPostgresql                 CreateDatabaseRequestDatabaseDialectEnum = "POSTGRESQL"
)

// CreateDatabaseRequest
// The request for CreateDatabase.
type CreateDatabaseRequest struct {
	CreateStatement  *string                                   `json:"createStatement,omitempty"`
	DatabaseDialect  *CreateDatabaseRequestDatabaseDialectEnum `json:"databaseDialect,omitempty"`
	EncryptionConfig *EncryptionConfig                         `json:"encryptionConfig,omitempty"`
	ExtraStatements  []string                                  `json:"extraStatements,omitempty"`
}
