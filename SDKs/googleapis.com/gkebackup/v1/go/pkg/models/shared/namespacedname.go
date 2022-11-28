package shared

// NamespacedName
// A reference to a namespaced resource in Kubernetes.
type NamespacedName struct {
	Name      *string `json:"name,omitempty"`
	Namespace *string `json:"namespace,omitempty"`
}
