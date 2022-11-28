package shared

type ImageIDCreateBatch struct {
	Images []ImageIDCreateEntry `json:"Images,omitempty"`
	TagIds []string             `json:"TagIds,omitempty"`
}
