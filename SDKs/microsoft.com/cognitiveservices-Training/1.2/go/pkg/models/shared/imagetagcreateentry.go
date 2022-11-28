package shared

type ImageTagCreateEntry struct {
	ImageID *string `json:"ImageId,omitempty"`
	TagID   *string `json:"TagId,omitempty"`
}
