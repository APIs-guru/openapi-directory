package shared

type PrivatePool struct {
	ArtifactStorage *string `json:"artifactStorage"`
	ServiceAccount  *string `json:"serviceAccount"`
	WorkerPool      *string `json:"workerPool"`
}
