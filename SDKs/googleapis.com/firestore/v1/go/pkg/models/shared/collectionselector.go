package shared

// CollectionSelector
// A selection of a collection, such as `messages as m1`.
type CollectionSelector struct {
	AllDescendants *bool   `json:"allDescendants,omitempty"`
	CollectionID   *string `json:"collectionId,omitempty"`
}
