package shared

// NodeLabels
// Collection of node-level [Kubernetes labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels).
type NodeLabels struct {
	Labels map[string]string `json:"labels,omitempty"`
}
