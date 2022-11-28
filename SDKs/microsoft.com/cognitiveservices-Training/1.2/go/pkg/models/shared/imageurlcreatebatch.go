package shared

type ImageURLCreateBatch struct {
	Images []ImageURLCreateEntry `json:"Images,omitempty"`
	TagIds []string              `json:"TagIds,omitempty"`
}
