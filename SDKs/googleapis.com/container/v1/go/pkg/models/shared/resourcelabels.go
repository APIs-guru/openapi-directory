package shared

// ResourceLabels
// Collection of [GCP labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels).
type ResourceLabels struct {
	Labels map[string]string `json:"labels,omitempty"`
}
