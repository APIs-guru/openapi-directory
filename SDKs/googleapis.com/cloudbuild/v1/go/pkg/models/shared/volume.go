package shared

// Volume
// Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution.
type Volume struct {
	Name *string `json:"name,omitempty"`
	Path *string `json:"path,omitempty"`
}
