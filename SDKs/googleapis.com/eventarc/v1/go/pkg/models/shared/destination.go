package shared

type Destination struct {
	CloudFunction *string   `json:"cloudFunction"`
	CloudRun      *CloudRun `json:"cloudRun"`
	Gke           *Gke      `json:"gke"`
	Workflow      *string   `json:"workflow"`
}
