package shared

type ImageTagCreateEntry struct {
	ImageID *string `json:"imageId,omitempty"`
	TagID   *string `json:"tagId,omitempty"`
}
