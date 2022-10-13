package shared

type Filter struct {
	CompositeFilter *CompositeFilter `json:"compositeFilter"`
	ValueFilter     *ValueFilter     `json:"valueFilter"`
}
