package shared



type BuildConfig struct {
    Build *string `json:"build,omitempty"`
    DockerRepository *string `json:"dockerRepository,omitempty"`
    EntryPoint *string `json:"entryPoint,omitempty"`
    EnvironmentVariables map[string]string `json:"environmentVariables,omitempty"`
    Runtime *string `json:"runtime,omitempty"`
    Source *Source `json:"source,omitempty"`
    SourceProvenance *SourceProvenance `json:"sourceProvenance,omitempty"`
    WorkerPool *string `json:"workerPool,omitempty"`
    
}

