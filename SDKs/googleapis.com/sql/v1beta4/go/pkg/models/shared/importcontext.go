package shared

type ImportContextBakImportOptionsEncryptionOptions struct {
	CertPath    *string `json:"certPath,omitempty"`
	PvkPassword *string `json:"pvkPassword,omitempty"`
	PvkPath     *string `json:"pvkPath,omitempty"`
}

// ImportContextBakImportOptions
// Import parameters specific to SQL Server .BAK files
type ImportContextBakImportOptions struct {
	EncryptionOptions *ImportContextBakImportOptionsEncryptionOptions `json:"encryptionOptions,omitempty"`
}

// ImportContextCsvImportOptions
// Options for importing data as CSV.
type ImportContextCsvImportOptions struct {
	Columns            []string `json:"columns,omitempty"`
	EscapeCharacter    *string  `json:"escapeCharacter,omitempty"`
	FieldsTerminatedBy *string  `json:"fieldsTerminatedBy,omitempty"`
	LinesTerminatedBy  *string  `json:"linesTerminatedBy,omitempty"`
	QuoteCharacter     *string  `json:"quoteCharacter,omitempty"`
	Table              *string  `json:"table,omitempty"`
}

type ImportContextFileTypeEnum string

const (
	ImportContextFileTypeEnumSQLFileTypeUnspecified ImportContextFileTypeEnum = "SQL_FILE_TYPE_UNSPECIFIED"
	ImportContextFileTypeEnumSQL                    ImportContextFileTypeEnum = "SQL"
	ImportContextFileTypeEnumCsv                    ImportContextFileTypeEnum = "CSV"
	ImportContextFileTypeEnumBak                    ImportContextFileTypeEnum = "BAK"
)

// ImportContext
// Database instance import context.
type ImportContext struct {
	BakImportOptions *ImportContextBakImportOptions `json:"bakImportOptions,omitempty"`
	CsvImportOptions *ImportContextCsvImportOptions `json:"csvImportOptions,omitempty"`
	Database         *string                        `json:"database,omitempty"`
	FileType         *ImportContextFileTypeEnum     `json:"fileType,omitempty"`
	ImportUser       *string                        `json:"importUser,omitempty"`
	Kind             *string                        `json:"kind,omitempty"`
	URI              *string                        `json:"uri,omitempty"`
}
