package shared

type ResourceManifest struct {
	ClusterScoped *bool   `json:"clusterScoped,omitempty"`
	Manifest      *string `json:"manifest,omitempty"`
}
