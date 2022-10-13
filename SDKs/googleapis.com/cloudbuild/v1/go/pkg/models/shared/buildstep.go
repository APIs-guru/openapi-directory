package shared

type BuildStepStatusEnum string

const (
	BuildStepStatusEnumStatusUnknown BuildStepStatusEnum = "STATUS_UNKNOWN"
	BuildStepStatusEnumPending       BuildStepStatusEnum = "PENDING"
	BuildStepStatusEnumQueued        BuildStepStatusEnum = "QUEUED"
	BuildStepStatusEnumWorking       BuildStepStatusEnum = "WORKING"
	BuildStepStatusEnumSuccess       BuildStepStatusEnum = "SUCCESS"
	BuildStepStatusEnumFailure       BuildStepStatusEnum = "FAILURE"
	BuildStepStatusEnumInternalError BuildStepStatusEnum = "INTERNAL_ERROR"
	BuildStepStatusEnumTimeout       BuildStepStatusEnum = "TIMEOUT"
	BuildStepStatusEnumCancelled     BuildStepStatusEnum = "CANCELLED"
	BuildStepStatusEnumExpired       BuildStepStatusEnum = "EXPIRED"
)

type BuildStep struct {
	AllowExitCodes []int32              `json:"allowExitCodes"`
	AllowFailure   *bool                `json:"allowFailure"`
	Args           []string             `json:"args"`
	Dir            *string              `json:"dir"`
	Entrypoint     *string              `json:"entrypoint"`
	Env            []string             `json:"env"`
	ExitCode       *int32               `json:"exitCode"`
	ID             *string              `json:"id"`
	Name           *string              `json:"name"`
	PullTiming     *TimeSpan            `json:"pullTiming"`
	Script         *string              `json:"script"`
	SecretEnv      []string             `json:"secretEnv"`
	Status         *BuildStepStatusEnum `json:"status"`
	Timeout        *string              `json:"timeout"`
	Timing         *TimeSpan            `json:"timing"`
	Volumes        []Volume             `json:"volumes"`
	WaitFor        []string             `json:"waitFor"`
}
