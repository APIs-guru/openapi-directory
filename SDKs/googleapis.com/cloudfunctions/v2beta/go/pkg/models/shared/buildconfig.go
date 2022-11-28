package shared

type BuildConfigDockerRegistryEnum string

const (
	BuildConfigDockerRegistryEnumDockerRegistryUnspecified BuildConfigDockerRegistryEnum = "DOCKER_REGISTRY_UNSPECIFIED"
	BuildConfigDockerRegistryEnumContainerRegistry         BuildConfigDockerRegistryEnum = "CONTAINER_REGISTRY"
	BuildConfigDockerRegistryEnumArtifactRegistry          BuildConfigDockerRegistryEnum = "ARTIFACT_REGISTRY"
)

// BuildConfigInput
// Describes the Build step of the function that builds a container from the given source.
type BuildConfigInput struct {
	BuildpackStack       *string                        `json:"buildpackStack,omitempty"`
	DockerRegistry       *BuildConfigDockerRegistryEnum `json:"dockerRegistry,omitempty"`
	DockerRepository     *string                        `json:"dockerRepository,omitempty"`
	EntryPoint           *string                        `json:"entryPoint,omitempty"`
	EnvironmentVariables map[string]string              `json:"environmentVariables,omitempty"`
	Runtime              *string                        `json:"runtime,omitempty"`
	Source               *Source                        `json:"source,omitempty"`
	SourceProvenance     *SourceProvenance              `json:"sourceProvenance,omitempty"`
	WorkerPool           *string                        `json:"workerPool,omitempty"`
}

// BuildConfig
// Describes the Build step of the function that builds a container from the given source.
type BuildConfig struct {
	Build                *string                        `json:"build,omitempty"`
	BuildpackStack       *string                        `json:"buildpackStack,omitempty"`
	DockerRegistry       *BuildConfigDockerRegistryEnum `json:"dockerRegistry,omitempty"`
	DockerRepository     *string                        `json:"dockerRepository,omitempty"`
	EntryPoint           *string                        `json:"entryPoint,omitempty"`
	EnvironmentVariables map[string]string              `json:"environmentVariables,omitempty"`
	Runtime              *string                        `json:"runtime,omitempty"`
	Source               *Source                        `json:"source,omitempty"`
	SourceProvenance     *SourceProvenance              `json:"sourceProvenance,omitempty"`
	WorkerPool           *string                        `json:"workerPool,omitempty"`
}
