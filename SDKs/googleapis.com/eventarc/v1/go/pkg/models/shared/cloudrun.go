package shared

type CloudRun struct {
	Path    *string `json:"path,omitempty"`
	Region  *string `json:"region,omitempty"`
	Service *string `json:"service,omitempty"`
}
