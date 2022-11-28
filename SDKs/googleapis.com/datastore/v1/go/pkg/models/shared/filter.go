package shared

// Filter
// A holder for any type of filter.
type Filter struct {
	CompositeFilter *CompositeFilter `json:"compositeFilter,omitempty"`
	PropertyFilter  *PropertyFilter  `json:"propertyFilter,omitempty"`
}
