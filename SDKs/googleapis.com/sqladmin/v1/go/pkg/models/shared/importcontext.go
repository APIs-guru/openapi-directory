package shared

type ImportContextBakImportOptionsEncryptionOptions struct {
	CertPath    *string `json:"certPath"`
	PvkPassword *string `json:"pvkPassword"`
	PvkPath     *string `json:"pvkPath"`
}

type ImportContextBakImportOptions struct {
	EncryptionOptions *ImportContextBakImportOptionsEncryptionOptions `json:"encryptionOptions"`
}

type ImportContextCsvImportOptions struct {
	Columns            []string `json:"columns"`
	EscapeCharacter    *string  `json:"escapeCharacter"`
	FieldsTerminatedBy *string  `json:"fieldsTerminatedBy"`
	LinesTerminatedBy  *string  `json:"linesTerminatedBy"`
	QuoteCharacter     *string  `json:"quoteCharacter"`
	Table              *string  `json:"table"`
}

type ImportContextFileTypeEnum string

const (
	ImportContextFileTypeEnumSQLFileTypeUnspecified ImportContextFileTypeEnum = "SQL_FILE_TYPE_UNSPECIFIED"
	ImportContextFileTypeEnumSQL                    ImportContextFileTypeEnum = "SQL"
	ImportContextFileTypeEnumCsv                    ImportContextFileTypeEnum = "CSV"
	ImportContextFileTypeEnumBak                    ImportContextFileTypeEnum = "BAK"
)

type ImportContext struct {
	BakImportOptions *ImportContextBakImportOptions `json:"bakImportOptions"`
	CsvImportOptions *ImportContextCsvImportOptions `json:"csvImportOptions"`
	Database         *string                        `json:"database"`
	FileType         *ImportContextFileTypeEnum     `json:"fileType"`
	ImportUser       *string                        `json:"importUser"`
	Kind             *string                        `json:"kind"`
	URI              *string                        `json:"uri"`
}
