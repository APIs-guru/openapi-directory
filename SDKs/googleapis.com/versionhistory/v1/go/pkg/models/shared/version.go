package shared

// Version
// Each Version is owned by a Channel. A Version only displays the Version number (e.g. 84.0.4147.38). A Version owns a collection of releases.
type Version struct {
	Name    *string `json:"name,omitempty"`
	Version *string `json:"version,omitempty"`
}
