package shared

type Filtering struct {
	Exclude []map[string]string `json:"exclude,omitempty"`
	Include []map[string]string `json:"include,omitempty"`
}
