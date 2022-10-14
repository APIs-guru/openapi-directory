package shared

type CollectionSelector struct {
	AllDescendants *bool   `json:"allDescendants,omitempty"`
	CollectionID   *string `json:"collectionId,omitempty"`
}
