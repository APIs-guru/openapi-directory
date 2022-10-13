package shared

type ResourceManifest struct {
	ClusterScoped *bool   `json:"clusterScoped"`
	Manifest      *string `json:"manifest"`
}
