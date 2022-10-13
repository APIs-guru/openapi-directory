package shared

type CollectionSelector struct {
	AllDescendants *bool   `json:"allDescendants"`
	CollectionID   *string `json:"collectionId"`
}
