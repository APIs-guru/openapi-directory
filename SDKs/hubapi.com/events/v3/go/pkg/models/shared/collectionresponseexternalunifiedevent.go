package shared

type CollectionResponseExternalUnifiedEvent struct {
	Paging  *Paging                `json:"paging"`
	Results []ExternalUnifiedEvent `json:"results"`
}
