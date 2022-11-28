package shared

type ImageIDCreateBatch struct {
	Images []ImageIDCreateEntry `json:"images,omitempty"`
	TagIds []string             `json:"tagIds,omitempty"`
}
