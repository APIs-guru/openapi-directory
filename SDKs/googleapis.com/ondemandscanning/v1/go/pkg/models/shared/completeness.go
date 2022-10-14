package shared

type Completeness struct {
	Arguments   *bool `json:"arguments,omitempty"`
	Environment *bool `json:"environment,omitempty"`
	Materials   *bool `json:"materials,omitempty"`
}
