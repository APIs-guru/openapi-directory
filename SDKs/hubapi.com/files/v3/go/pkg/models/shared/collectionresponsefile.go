package shared

type CollectionResponseFile struct {
	Paging  *Paging `json:"paging,omitempty"`
	Results []File  `json:"results"`
}
