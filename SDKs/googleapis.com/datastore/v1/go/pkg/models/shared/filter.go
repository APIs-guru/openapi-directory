package shared

type Filter struct {
	CompositeFilter *CompositeFilter `json:"compositeFilter"`
	PropertyFilter  *PropertyFilter  `json:"propertyFilter"`
}
