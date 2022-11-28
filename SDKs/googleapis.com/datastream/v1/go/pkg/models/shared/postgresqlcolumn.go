package shared

// PostgresqlColumn
// PostgreSQL Column.
type PostgresqlColumn struct {
	Column          *string `json:"column,omitempty"`
	DataType        *string `json:"dataType,omitempty"`
	Length          *int32  `json:"length,omitempty"`
	Nullable        *bool   `json:"nullable,omitempty"`
	OrdinalPosition *int32  `json:"ordinalPosition,omitempty"`
	Precision       *int32  `json:"precision,omitempty"`
	PrimaryKey      *bool   `json:"primaryKey,omitempty"`
	Scale           *int32  `json:"scale,omitempty"`
}
