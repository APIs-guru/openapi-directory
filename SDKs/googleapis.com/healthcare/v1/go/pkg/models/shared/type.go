package shared

type TypePrimitiveEnum string

const (
	TypePrimitiveEnumPrimitiveUnspecified TypePrimitiveEnum = "PRIMITIVE_UNSPECIFIED"
	TypePrimitiveEnumString               TypePrimitiveEnum = "STRING"
	TypePrimitiveEnumVaries               TypePrimitiveEnum = "VARIES"
	TypePrimitiveEnumUnescapedString      TypePrimitiveEnum = "UNESCAPED_STRING"
)

type Type struct {
	Fields    []Field            `json:"fields"`
	Name      *string            `json:"name"`
	Primitive *TypePrimitiveEnum `json:"primitive"`
}
