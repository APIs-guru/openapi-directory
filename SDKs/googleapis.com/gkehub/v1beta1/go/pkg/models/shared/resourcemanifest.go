package shared

// ResourceManifest
// ResourceManifest represents a single Kubernetes resource to be applied to the cluster.
type ResourceManifest struct {
	ClusterScoped *bool   `json:"clusterScoped,omitempty"`
	Manifest      *string `json:"manifest,omitempty"`
}
