package shared

type CollectionResponseExternalUnifiedEvent struct {
	Paging  *Paging                `json:"paging,omitempty"`
	Results []ExternalUnifiedEvent `json:"results"`
}
