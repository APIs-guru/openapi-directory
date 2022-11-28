package shared

// DeploymentNote
// An artifact that can be deployed in some runtime.
type DeploymentNote struct {
	ResourceURI []string `json:"resourceUri,omitempty"`
}
