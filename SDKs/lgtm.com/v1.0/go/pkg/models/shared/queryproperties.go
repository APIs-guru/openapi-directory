package shared

type QueryProperties struct {
	ID       *string  `json:"id,omitempty"`
	Name     *string  `json:"name,omitempty"`
	Severity *string  `json:"severity,omitempty"`
	Tags     []string `json:"tags,omitempty"`
}
