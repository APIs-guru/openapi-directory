package shared

type CollectionResponseActionRevisionForwardPaging struct {
	Paging  *ForwardPaging   `json:"paging,omitempty"`
	Results []ActionRevision `json:"results"`
}
