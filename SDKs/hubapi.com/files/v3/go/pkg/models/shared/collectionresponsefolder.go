package shared

type CollectionResponseFolder struct {
	Paging  *Paging  `json:"paging"`
	Results []Folder `json:"results"`
}
