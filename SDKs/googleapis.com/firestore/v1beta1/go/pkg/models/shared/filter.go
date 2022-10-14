package shared

type Filter struct {
	CompositeFilter *CompositeFilter `json:"compositeFilter,omitempty"`
	FieldFilter     *FieldFilter     `json:"fieldFilter,omitempty"`
	UnaryFilter     *UnaryFilter     `json:"unaryFilter,omitempty"`
}
