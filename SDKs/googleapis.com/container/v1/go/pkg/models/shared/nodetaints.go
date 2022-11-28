package shared

// NodeTaints
// Collection of Kubernetes [node taints](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration).
type NodeTaints struct {
	Taints []NodeTaint `json:"taints,omitempty"`
}
