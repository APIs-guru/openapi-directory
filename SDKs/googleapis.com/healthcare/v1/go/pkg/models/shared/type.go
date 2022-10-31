package shared




type TypePrimitiveEnum string

const (
    TypePrimitiveEnumPrimitiveUnspecified TypePrimitiveEnum = "PRIMITIVE_UNSPECIFIED"
TypePrimitiveEnumString TypePrimitiveEnum = "STRING"
TypePrimitiveEnumVaries TypePrimitiveEnum = "VARIES"
TypePrimitiveEnumUnescapedString TypePrimitiveEnum = "UNESCAPED_STRING"
)


type Type struct {
    Fields []Field `json:"fields,omitempty"`
    Name *string `json:"name,omitempty"`
    Primitive *TypePrimitiveEnum `json:"primitive,omitempty"`
    
}

