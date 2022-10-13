package shared

type BucketAccessControls struct {
	Items []BucketAccessControl `json:"items"`
	Kind  *string               `json:"kind"`
}
