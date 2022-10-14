package shared

type CollectionResponseFolder struct {
	Paging  *Paging  `json:"paging,omitempty"`
	Results []Folder `json:"results"`
}
