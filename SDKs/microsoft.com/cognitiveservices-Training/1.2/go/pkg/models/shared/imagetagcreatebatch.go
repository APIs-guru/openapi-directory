package shared

type ImageTagCreateBatch struct {
	Tags []ImageTagCreateEntry `json:"Tags,omitempty"`
}
