package shared

// Mount
// Carries information about a particular disk mount inside a container.
type Mount struct {
	Disk     *string `json:"disk,omitempty"`
	Path     *string `json:"path,omitempty"`
	ReadOnly *bool   `json:"readOnly,omitempty"`
}
