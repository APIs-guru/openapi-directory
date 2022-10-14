package shared

type Extension struct {
	Category       *string       `json:"category,omitempty"`
	Disabled       *bool         `json:"disabled,omitempty"`
	Name           *string       `json:"name,omitempty"`
	TypeDescriptor *string       `json:"typeDescriptor,omitempty"`
	Version        *BuildVersion `json:"version,omitempty"`
}
