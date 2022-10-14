package shared

type OracleColumn struct {
	Column          *string `json:"column,omitempty"`
	DataType        *string `json:"dataType,omitempty"`
	Encoding        *string `json:"encoding,omitempty"`
	Length          *int32  `json:"length,omitempty"`
	Nullable        *bool   `json:"nullable,omitempty"`
	OrdinalPosition *int32  `json:"ordinalPosition,omitempty"`
	Precision       *int32  `json:"precision,omitempty"`
	PrimaryKey      *bool   `json:"primaryKey,omitempty"`
	Scale           *int32  `json:"scale,omitempty"`
}
