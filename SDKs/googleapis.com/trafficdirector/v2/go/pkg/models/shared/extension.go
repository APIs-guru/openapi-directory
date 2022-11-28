package shared

// Extension
// Version and identification for an Envoy extension. [#next-free-field: 6]
type Extension struct {
	Category       *string       `json:"category,omitempty"`
	Disabled       *bool         `json:"disabled,omitempty"`
	Name           *string       `json:"name,omitempty"`
	TypeDescriptor *string       `json:"typeDescriptor,omitempty"`
	Version        *BuildVersion `json:"version,omitempty"`
}
