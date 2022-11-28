package shared

type CompositeFilterOpEnum string

const (
	CompositeFilterOpEnumOperatorUnspecified CompositeFilterOpEnum = "OPERATOR_UNSPECIFIED"
	CompositeFilterOpEnumAnd                 CompositeFilterOpEnum = "AND"
)

// CompositeFilter
// A filter that merges multiple other filters using the given operator.
type CompositeFilter struct {
	Filters []Filter               `json:"filters,omitempty"`
	Op      *CompositeFilterOpEnum `json:"op,omitempty"`
}
