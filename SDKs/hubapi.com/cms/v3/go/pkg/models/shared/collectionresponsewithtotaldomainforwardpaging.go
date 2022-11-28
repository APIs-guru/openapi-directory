package shared

type CollectionResponseWithTotalDomainForwardPaging struct {
	Paging  *ForwardPaging `json:"paging,omitempty"`
	Results []Domain       `json:"results"`
	Total   int32          `json:"total"`
}
