package shared

type Destination struct {
	CloudFunction *string   `json:"cloudFunction,omitempty"`
	CloudRun      *CloudRun `json:"cloudRun,omitempty"`
	Gke           *Gke      `json:"gke,omitempty"`
	Workflow      *string   `json:"workflow,omitempty"`
}
