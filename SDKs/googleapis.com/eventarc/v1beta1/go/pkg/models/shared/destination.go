package shared

// Destination
// Represents a target of an invocation over HTTP.
type Destination struct {
	CloudRunService *CloudRunService `json:"cloudRunService,omitempty"`
}
