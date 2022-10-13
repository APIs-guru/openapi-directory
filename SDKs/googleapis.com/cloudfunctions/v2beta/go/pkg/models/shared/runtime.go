package shared

type RuntimeEnvironmentEnum string

const (
	RuntimeEnvironmentEnumEnvironmentUnspecified RuntimeEnvironmentEnum = "ENVIRONMENT_UNSPECIFIED"
	RuntimeEnvironmentEnumGen1                   RuntimeEnvironmentEnum = "GEN_1"
	RuntimeEnvironmentEnumGen2                   RuntimeEnvironmentEnum = "GEN_2"
)

type RuntimeStageEnum string

const (
	RuntimeStageEnumRuntimeStageUnspecified RuntimeStageEnum = "RUNTIME_STAGE_UNSPECIFIED"
	RuntimeStageEnumDevelopment             RuntimeStageEnum = "DEVELOPMENT"
	RuntimeStageEnumAlpha                   RuntimeStageEnum = "ALPHA"
	RuntimeStageEnumBeta                    RuntimeStageEnum = "BETA"
	RuntimeStageEnumGa                      RuntimeStageEnum = "GA"
	RuntimeStageEnumDeprecated              RuntimeStageEnum = "DEPRECATED"
	RuntimeStageEnumDecommissioned          RuntimeStageEnum = "DECOMMISSIONED"
)

type Runtime struct {
	DisplayName *string                 `json:"displayName"`
	Environment *RuntimeEnvironmentEnum `json:"environment"`
	Name        *string                 `json:"name"`
	Stage       *RuntimeStageEnum       `json:"stage"`
	Warnings    []string                `json:"warnings"`
}
