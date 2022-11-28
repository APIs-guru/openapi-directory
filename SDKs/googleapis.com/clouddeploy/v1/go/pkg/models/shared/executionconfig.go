package shared

type ExecutionConfigUsagesEnum string

const (
	ExecutionConfigUsagesEnumExecutionEnvironmentUsageUnspecified ExecutionConfigUsagesEnum = "EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED"
	ExecutionConfigUsagesEnumRender                               ExecutionConfigUsagesEnum = "RENDER"
	ExecutionConfigUsagesEnumDeploy                               ExecutionConfigUsagesEnum = "DEPLOY"
	ExecutionConfigUsagesEnumVerify                               ExecutionConfigUsagesEnum = "VERIFY"
)

// ExecutionConfig
// Configuration of the environment to use when calling Skaffold.
type ExecutionConfig struct {
	ArtifactStorage  *string                     `json:"artifactStorage,omitempty"`
	DefaultPool      *DefaultPool                `json:"defaultPool,omitempty"`
	ExecutionTimeout *string                     `json:"executionTimeout,omitempty"`
	PrivatePool      *PrivatePool                `json:"privatePool,omitempty"`
	ServiceAccount   *string                     `json:"serviceAccount,omitempty"`
	Usages           []ExecutionConfigUsagesEnum `json:"usages,omitempty"`
	WorkerPool       *string                     `json:"workerPool,omitempty"`
}
