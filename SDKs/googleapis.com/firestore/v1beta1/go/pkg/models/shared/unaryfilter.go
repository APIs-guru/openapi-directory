package shared




type UnaryFilterOpEnum string

const (
    UnaryFilterOpEnumOperatorUnspecified UnaryFilterOpEnum = "OPERATOR_UNSPECIFIED"
UnaryFilterOpEnumIsNan UnaryFilterOpEnum = "IS_NAN"
UnaryFilterOpEnumIsNull UnaryFilterOpEnum = "IS_NULL"
UnaryFilterOpEnumIsNotNan UnaryFilterOpEnum = "IS_NOT_NAN"
UnaryFilterOpEnumIsNotNull UnaryFilterOpEnum = "IS_NOT_NULL"
)


type UnaryFilter struct {
    Field *FieldReference `json:"field,omitempty"`
    Op *UnaryFilterOpEnum `json:"op,omitempty"`
    
}

