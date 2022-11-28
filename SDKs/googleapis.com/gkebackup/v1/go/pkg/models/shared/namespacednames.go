package shared

// NamespacedNames
// A list of namespaced Kubernetes resources.
type NamespacedNames struct {
	NamespacedNames []NamespacedName `json:"namespacedNames,omitempty"`
}
