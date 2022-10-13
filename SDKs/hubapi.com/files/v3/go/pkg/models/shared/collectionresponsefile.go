package shared

type CollectionResponseFile struct {
	Paging  *Paging `json:"paging"`
	Results []File  `json:"results"`
}
