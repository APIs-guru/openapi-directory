package shared

// Destination
// Represents a target of an invocation over HTTP.
type Destination struct {
	CloudFunction *string   `json:"cloudFunction,omitempty"`
	CloudRun      *CloudRun `json:"cloudRun,omitempty"`
	Gke           *Gke      `json:"gke,omitempty"`
	Workflow      *string   `json:"workflow,omitempty"`
}
