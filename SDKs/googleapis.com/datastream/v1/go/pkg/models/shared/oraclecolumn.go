package shared

type OracleColumn struct {
	Column          *string `json:"column"`
	DataType        *string `json:"dataType"`
	Encoding        *string `json:"encoding"`
	Length          *int32  `json:"length"`
	Nullable        *bool   `json:"nullable"`
	OrdinalPosition *int32  `json:"ordinalPosition"`
	Precision       *int32  `json:"precision"`
	PrimaryKey      *bool   `json:"primaryKey"`
	Scale           *int32  `json:"scale"`
}
