package shared

// BucketAccessControls
// An access-control list.
type BucketAccessControls struct {
	Items []BucketAccessControl `json:"items,omitempty"`
	Kind  *string               `json:"kind,omitempty"`
}
