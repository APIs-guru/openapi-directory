package shared

type TypeCodeEnum string

const (
	TypeCodeEnumTypeCodeUnspecified TypeCodeEnum = "TYPE_CODE_UNSPECIFIED"
	TypeCodeEnumBool                TypeCodeEnum = "BOOL"
	TypeCodeEnumInt64               TypeCodeEnum = "INT64"
	TypeCodeEnumFloat64             TypeCodeEnum = "FLOAT64"
	TypeCodeEnumTimestamp           TypeCodeEnum = "TIMESTAMP"
	TypeCodeEnumDate                TypeCodeEnum = "DATE"
	TypeCodeEnumString              TypeCodeEnum = "STRING"
	TypeCodeEnumBytes               TypeCodeEnum = "BYTES"
	TypeCodeEnumArray               TypeCodeEnum = "ARRAY"
	TypeCodeEnumStruct              TypeCodeEnum = "STRUCT"
	TypeCodeEnumNumeric             TypeCodeEnum = "NUMERIC"
	TypeCodeEnumJSON                TypeCodeEnum = "JSON"
)

type TypeTypeAnnotationEnum string

const (
	TypeTypeAnnotationEnumTypeAnnotationCodeUnspecified TypeTypeAnnotationEnum = "TYPE_ANNOTATION_CODE_UNSPECIFIED"
	TypeTypeAnnotationEnumPgNumeric                     TypeTypeAnnotationEnum = "PG_NUMERIC"
	TypeTypeAnnotationEnumPgJsonb                       TypeTypeAnnotationEnum = "PG_JSONB"
)

// Type
// `Type` indicates the type of a Cloud Spanner value, as might be stored in a table cell or returned from an SQL query.
type Type struct {
	ArrayElementType *Type                   `json:"arrayElementType,omitempty"`
	Code             *TypeCodeEnum           `json:"code,omitempty"`
	StructType       *StructType             `json:"structType,omitempty"`
	TypeAnnotation   *TypeTypeAnnotationEnum `json:"typeAnnotation,omitempty"`
}
