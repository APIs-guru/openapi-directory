package shared

type PostgresqlColumn struct {
	Column          *string `json:"column"`
	DataType        *string `json:"dataType"`
	Length          *int32  `json:"length"`
	Nullable        *bool   `json:"nullable"`
	OrdinalPosition *int32  `json:"ordinalPosition"`
	Precision       *int32  `json:"precision"`
	PrimaryKey      *bool   `json:"primaryKey"`
	Scale           *int32  `json:"scale"`
}
