package shared

type ImageFileCreateBatch struct {
	Images []ImageFileCreateEntry `json:"images,omitempty"`
	TagIds []string               `json:"tagIds,omitempty"`
}
