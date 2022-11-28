package shared

// TypeMeta
// TypeMeta is the type information needed for content unmarshalling of Kubernetes resources in the manifest.
type TypeMeta struct {
	APIVersion *string `json:"apiVersion,omitempty"`
	Kind       *string `json:"kind,omitempty"`
}
