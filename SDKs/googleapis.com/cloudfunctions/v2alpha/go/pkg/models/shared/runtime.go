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

// Runtime
// Describes a runtime and any special information (e.g., deprecation status) related to it.
type Runtime struct {
	DisplayName *string                 `json:"displayName,omitempty"`
	Environment *RuntimeEnvironmentEnum `json:"environment,omitempty"`
	Name        *string                 `json:"name,omitempty"`
	Stage       *RuntimeStageEnum       `json:"stage,omitempty"`
	Warnings    []string                `json:"warnings,omitempty"`
}
