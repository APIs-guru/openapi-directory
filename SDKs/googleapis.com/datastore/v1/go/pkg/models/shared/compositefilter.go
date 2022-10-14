package shared

type CompositeFilterOpEnum string

const (
	CompositeFilterOpEnumOperatorUnspecified CompositeFilterOpEnum = "OPERATOR_UNSPECIFIED"
	CompositeFilterOpEnumAnd                 CompositeFilterOpEnum = "AND"
)

type CompositeFilter struct {
	Filters []Filter               `json:"filters,omitempty"`
	Op      *CompositeFilterOpEnum `json:"op,omitempty"`
}
