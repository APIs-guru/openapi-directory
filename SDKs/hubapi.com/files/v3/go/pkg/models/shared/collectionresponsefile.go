package shared

// CollectionResponseFile
// Collections of files
type CollectionResponseFile struct {
	Paging  *Paging `json:"paging,omitempty"`
	Results []File  `json:"results"`
}
