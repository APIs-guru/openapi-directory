package shared

type ImageURLCreateBatch struct {
	Images []ImageURLCreateEntry `json:"images,omitempty"`
	TagIds []string              `json:"tagIds,omitempty"`
}
