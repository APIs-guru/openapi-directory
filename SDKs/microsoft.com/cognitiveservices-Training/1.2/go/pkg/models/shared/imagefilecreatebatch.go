package shared

type ImageFileCreateBatch struct {
	Images []ImageFileCreateEntry `json:"Images,omitempty"`
	TagIds []string               `json:"TagIds,omitempty"`
}
