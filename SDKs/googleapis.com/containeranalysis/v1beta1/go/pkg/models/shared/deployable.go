package shared

// Deployable
// An artifact that can be deployed in some runtime.
type Deployable struct {
	ResourceURI []string `json:"resourceUri,omitempty"`
}
