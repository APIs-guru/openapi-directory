package shared

type Filter struct {
	CompositeFilter *CompositeFilter `json:"compositeFilter"`
	FieldFilter     *FieldFilter     `json:"fieldFilter"`
	UnaryFilter     *UnaryFilter     `json:"unaryFilter"`
}
