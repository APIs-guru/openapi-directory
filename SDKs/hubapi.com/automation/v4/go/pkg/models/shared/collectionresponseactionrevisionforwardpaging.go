package shared

type CollectionResponseActionRevisionForwardPaging struct {
	Paging  *ForwardPaging   `json:"paging"`
	Results []ActionRevision `json:"results"`
}
