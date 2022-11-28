package shared

// PrivatePool
// Execution using a private Cloud Build pool.
type PrivatePool struct {
	ArtifactStorage *string `json:"artifactStorage,omitempty"`
	ServiceAccount  *string `json:"serviceAccount,omitempty"`
	WorkerPool      *string `json:"workerPool,omitempty"`
}
