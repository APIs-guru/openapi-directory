package shared

type ExportContextCsvExportOptions struct {
	EscapeCharacter    *string `json:"escapeCharacter,omitempty"`
	FieldsTerminatedBy *string `json:"fieldsTerminatedBy,omitempty"`
	LinesTerminatedBy  *string `json:"linesTerminatedBy,omitempty"`
	QuoteCharacter     *string `json:"quoteCharacter,omitempty"`
	SelectQuery        *string `json:"selectQuery,omitempty"`
}

type ExportContextFileTypeEnum string

const (
	ExportContextFileTypeEnumSQLFileTypeUnspecified ExportContextFileTypeEnum = "SQL_FILE_TYPE_UNSPECIFIED"
	ExportContextFileTypeEnumSQL                    ExportContextFileTypeEnum = "SQL"
	ExportContextFileTypeEnumCsv                    ExportContextFileTypeEnum = "CSV"
	ExportContextFileTypeEnumBak                    ExportContextFileTypeEnum = "BAK"
)

type ExportContextSQLExportOptionsMysqlExportOptions struct {
	MasterData *int32 `json:"masterData,omitempty"`
}

type ExportContextSQLExportOptions struct {
	MysqlExportOptions *ExportContextSQLExportOptionsMysqlExportOptions `json:"mysqlExportOptions,omitempty"`
	SchemaOnly         *bool                                            `json:"schemaOnly,omitempty"`
	Tables             []string                                         `json:"tables,omitempty"`
}

type ExportContext struct {
	CsvExportOptions *ExportContextCsvExportOptions `json:"csvExportOptions,omitempty"`
	Databases        []string                       `json:"databases,omitempty"`
	FileType         *ExportContextFileTypeEnum     `json:"fileType,omitempty"`
	Kind             *string                        `json:"kind,omitempty"`
	Offload          *bool                          `json:"offload,omitempty"`
	SQLExportOptions *ExportContextSQLExportOptions `json:"sqlExportOptions,omitempty"`
	URI              *string                        `json:"uri,omitempty"`
}
