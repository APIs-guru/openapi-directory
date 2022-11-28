package shared

type ImageTagCreateBatch struct {
	Tags []ImageTagCreateEntry `json:"tags,omitempty"`
}
