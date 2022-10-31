package shared



type PrivatePool struct {
    ArtifactStorage *string `json:"artifactStorage,omitempty"`
    ServiceAccount *string `json:"serviceAccount,omitempty"`
    WorkerPool *string `json:"workerPool,omitempty"`
    
}

