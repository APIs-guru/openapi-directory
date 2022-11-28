package shared

// DefaultPool
// Execution using the default Cloud Build pool.
type DefaultPool struct {
	ArtifactStorage *string `json:"artifactStorage,omitempty"`
	ServiceAccount  *string `json:"serviceAccount,omitempty"`
}
