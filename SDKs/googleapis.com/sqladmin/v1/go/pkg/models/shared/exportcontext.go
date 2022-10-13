package shared

type ExportContextCsvExportOptions struct {
	EscapeCharacter    *string `json:"escapeCharacter"`
	FieldsTerminatedBy *string `json:"fieldsTerminatedBy"`
	LinesTerminatedBy  *string `json:"linesTerminatedBy"`
	QuoteCharacter     *string `json:"quoteCharacter"`
	SelectQuery        *string `json:"selectQuery"`
}

type ExportContextFileTypeEnum string

const (
	ExportContextFileTypeEnumSQLFileTypeUnspecified ExportContextFileTypeEnum = "SQL_FILE_TYPE_UNSPECIFIED"
	ExportContextFileTypeEnumSQL                    ExportContextFileTypeEnum = "SQL"
	ExportContextFileTypeEnumCsv                    ExportContextFileTypeEnum = "CSV"
	ExportContextFileTypeEnumBak                    ExportContextFileTypeEnum = "BAK"
)

type ExportContextSQLExportOptionsMysqlExportOptions struct {
	MasterData *int32 `json:"masterData"`
}

type ExportContextSQLExportOptions struct {
	MysqlExportOptions *ExportContextSQLExportOptionsMysqlExportOptions `json:"mysqlExportOptions"`
	SchemaOnly         *bool                                            `json:"schemaOnly"`
	Tables             []string                                         `json:"tables"`
}

type ExportContext struct {
	CsvExportOptions *ExportContextCsvExportOptions `json:"csvExportOptions"`
	Databases        []string                       `json:"databases"`
	FileType         *ExportContextFileTypeEnum     `json:"fileType"`
	Kind             *string                        `json:"kind"`
	Offload          *bool                          `json:"offload"`
	SQLExportOptions *ExportContextSQLExportOptions `json:"sqlExportOptions"`
	URI              *string                        `json:"uri"`
}
