package shared

// KubernetesDashboard
// Configuration for the Kubernetes Dashboard.
type KubernetesDashboard struct {
	Disabled *bool `json:"disabled,omitempty"`
}
