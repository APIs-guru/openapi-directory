package shared

type PropertyFilterOpEnum string

const (
	PropertyFilterOpEnumOperatorUnspecified PropertyFilterOpEnum = "OPERATOR_UNSPECIFIED"
	PropertyFilterOpEnumLessThan            PropertyFilterOpEnum = "LESS_THAN"
	PropertyFilterOpEnumLessThanOrEqual     PropertyFilterOpEnum = "LESS_THAN_OR_EQUAL"
	PropertyFilterOpEnumGreaterThan         PropertyFilterOpEnum = "GREATER_THAN"
	PropertyFilterOpEnumGreaterThanOrEqual  PropertyFilterOpEnum = "GREATER_THAN_OR_EQUAL"
	PropertyFilterOpEnumEqual               PropertyFilterOpEnum = "EQUAL"
	PropertyFilterOpEnumIn                  PropertyFilterOpEnum = "IN"
	PropertyFilterOpEnumNotEqual            PropertyFilterOpEnum = "NOT_EQUAL"
	PropertyFilterOpEnumHasAncestor         PropertyFilterOpEnum = "HAS_ANCESTOR"
	PropertyFilterOpEnumNotIn               PropertyFilterOpEnum = "NOT_IN"
)

// PropertyFilter
// A filter on a specific property.
type PropertyFilter struct {
	Op       *PropertyFilterOpEnum `json:"op,omitempty"`
	Property *PropertyReference    `json:"property,omitempty"`
	Value    *Value                `json:"value,omitempty"`
}
