package shared

type CollectionResponseWithTotalDomain struct {
	Paging  *Paging  `json:"paging"`
	Results []Domain `json:"results"`
	Total   int32    `json:"total"`
}
