package shared

type DataType struct {
	Field []DataTypeField `json:"field"`
	Name  *string         `json:"name"`
}
