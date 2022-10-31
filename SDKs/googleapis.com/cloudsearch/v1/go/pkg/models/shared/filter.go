package shared

type Filter struct {
	CompositeFilter *CompositeFilter `json:"compositeFilter,omitempty"`
	ValueFilter     *ValueFilter     `json:"valueFilter,omitempty"`
}
