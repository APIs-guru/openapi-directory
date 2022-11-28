package shared

// RuntimeConfig
// A RuntimeConfig resource is the primary resource in the Cloud RuntimeConfig service. A RuntimeConfig resource consists of metadata and a hierarchy of variables.
type RuntimeConfig struct {
	Description *string `json:"description,omitempty"`
	Name        *string `json:"name,omitempty"`
}
