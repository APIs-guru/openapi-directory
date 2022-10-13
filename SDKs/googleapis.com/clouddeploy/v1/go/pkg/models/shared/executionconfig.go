package shared

type ExecutionConfigUsagesEnum string

const (
	ExecutionConfigUsagesEnumExecutionEnvironmentUsageUnspecified ExecutionConfigUsagesEnum = "EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED"
	ExecutionConfigUsagesEnumRender                               ExecutionConfigUsagesEnum = "RENDER"
	ExecutionConfigUsagesEnumDeploy                               ExecutionConfigUsagesEnum = "DEPLOY"
	ExecutionConfigUsagesEnumVerify                               ExecutionConfigUsagesEnum = "VERIFY"
)

type ExecutionConfig struct {
	ArtifactStorage  *string                     `json:"artifactStorage"`
	DefaultPool      *DefaultPool                `json:"defaultPool"`
	ExecutionTimeout *string                     `json:"executionTimeout"`
	PrivatePool      *PrivatePool                `json:"privatePool"`
	ServiceAccount   *string                     `json:"serviceAccount"`
	Usages           []ExecutionConfigUsagesEnum `json:"usages"`
	WorkerPool       *string                     `json:"workerPool"`
}
