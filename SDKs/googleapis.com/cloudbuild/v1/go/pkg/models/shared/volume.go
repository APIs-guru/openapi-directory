package shared

type Volume struct {
	Name *string `json:"name,omitempty"`
	Path *string `json:"path,omitempty"`
}
