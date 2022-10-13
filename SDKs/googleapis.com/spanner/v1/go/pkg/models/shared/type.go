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

type Type struct {
	ArrayElementType *Type                   `json:"arrayElementType"`
	Code             *TypeCodeEnum           `json:"code"`
	StructType       *StructType             `json:"structType"`
	TypeAnnotation   *TypeTypeAnnotationEnum `json:"typeAnnotation"`
}
