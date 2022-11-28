package shared

// Gke
// Represents a GKE destination.
type Gke struct {
	Cluster   *string `json:"cluster,omitempty"`
	Location  *string `json:"location,omitempty"`
	Namespace *string `json:"namespace,omitempty"`
	Path      *string `json:"path,omitempty"`
	Service   *string `json:"service,omitempty"`
}
