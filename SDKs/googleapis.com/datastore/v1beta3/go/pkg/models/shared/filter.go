package shared

type Filter struct {
	CompositeFilter *CompositeFilter `json:"compositeFilter,omitempty"`
	PropertyFilter  *PropertyFilter  `json:"propertyFilter,omitempty"`
}
