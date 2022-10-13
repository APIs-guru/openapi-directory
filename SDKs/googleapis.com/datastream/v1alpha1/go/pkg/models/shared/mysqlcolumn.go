package shared

type MysqlColumn struct {
	Collation       *string `json:"collation"`
	ColumnName      *string `json:"columnName"`
	DataType        *string `json:"dataType"`
	Length          *int32  `json:"length"`
	Nullable        *bool   `json:"nullable"`
	OrdinalPosition *int32  `json:"ordinalPosition"`
	PrimaryKey      *bool   `json:"primaryKey"`
}
