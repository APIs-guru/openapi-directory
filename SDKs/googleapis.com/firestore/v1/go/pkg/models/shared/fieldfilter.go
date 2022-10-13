package shared

type FieldFilterOpEnum string

const (
	FieldFilterOpEnumOperatorUnspecified FieldFilterOpEnum = "OPERATOR_UNSPECIFIED"
	FieldFilterOpEnumLessThan            FieldFilterOpEnum = "LESS_THAN"
	FieldFilterOpEnumLessThanOrEqual     FieldFilterOpEnum = "LESS_THAN_OR_EQUAL"
	FieldFilterOpEnumGreaterThan         FieldFilterOpEnum = "GREATER_THAN"
	FieldFilterOpEnumGreaterThanOrEqual  FieldFilterOpEnum = "GREATER_THAN_OR_EQUAL"
	FieldFilterOpEnumEqual               FieldFilterOpEnum = "EQUAL"
	FieldFilterOpEnumNotEqual            FieldFilterOpEnum = "NOT_EQUAL"
	FieldFilterOpEnumArrayContains       FieldFilterOpEnum = "ARRAY_CONTAINS"
	FieldFilterOpEnumIn                  FieldFilterOpEnum = "IN"
	FieldFilterOpEnumArrayContainsAny    FieldFilterOpEnum = "ARRAY_CONTAINS_ANY"
	FieldFilterOpEnumNotIn               FieldFilterOpEnum = "NOT_IN"
)

type FieldFilter struct {
	Field *FieldReference    `json:"field"`
	Op    *FieldFilterOpEnum `json:"op"`
	Value *Value             `json:"value"`
}
