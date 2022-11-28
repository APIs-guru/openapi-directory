package shared

// GroupKind
// This is a direct map to the Kubernetes GroupKind type [GroupKind](https://godoc.org/k8s.io/apimachinery/pkg/runtime/schema#GroupKind) and is used for identifying specific "types" of resources to restore.
type GroupKind struct {
	ResourceGroup *string `json:"resourceGroup,omitempty"`
	ResourceKind  *string `json:"resourceKind,omitempty"`
}
