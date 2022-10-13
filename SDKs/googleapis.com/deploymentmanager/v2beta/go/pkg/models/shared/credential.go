package shared

type Credential struct {
	BasicAuth         *BasicAuth      `json:"basicAuth"`
	ServiceAccount    *ServiceAccount `json:"serviceAccount"`
	UseProjectDefault *bool           `json:"useProjectDefault"`
}
