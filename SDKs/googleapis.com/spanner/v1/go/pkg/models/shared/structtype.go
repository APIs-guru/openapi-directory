package shared

// StructType
// `StructType` defines the fields of a STRUCT type.
type StructType struct {
	Fields []Field `json:"fields,omitempty"`
}
