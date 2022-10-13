package shared

type BuildConfig struct {
	Build                *string           `json:"build"`
	DockerRepository     *string           `json:"dockerRepository"`
	EntryPoint           *string           `json:"entryPoint"`
	EnvironmentVariables map[string]string `json:"environmentVariables"`
	Runtime              *string           `json:"runtime"`
	Source               *Source           `json:"source"`
	SourceProvenance     *SourceProvenance `json:"sourceProvenance"`
	WorkerPool           *string           `json:"workerPool"`
}
