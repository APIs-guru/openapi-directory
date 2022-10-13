package shared

type Extension struct {
	Category       *string       `json:"category"`
	Disabled       *bool         `json:"disabled"`
	Name           *string       `json:"name"`
	TypeDescriptor *string       `json:"typeDescriptor"`
	Version        *BuildVersion `json:"version"`
}
