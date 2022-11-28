package shared

type EnvironmentTargetingOptionDetailsEnvironmentEnum string

const (
	EnvironmentTargetingOptionDetailsEnvironmentEnumEnvironmentUnspecified     EnvironmentTargetingOptionDetailsEnvironmentEnum = "ENVIRONMENT_UNSPECIFIED"
	EnvironmentTargetingOptionDetailsEnvironmentEnumEnvironmentWebOptimized    EnvironmentTargetingOptionDetailsEnvironmentEnum = "ENVIRONMENT_WEB_OPTIMIZED"
	EnvironmentTargetingOptionDetailsEnvironmentEnumEnvironmentWebNotOptimized EnvironmentTargetingOptionDetailsEnvironmentEnum = "ENVIRONMENT_WEB_NOT_OPTIMIZED"
	EnvironmentTargetingOptionDetailsEnvironmentEnumEnvironmentApp             EnvironmentTargetingOptionDetailsEnvironmentEnum = "ENVIRONMENT_APP"
)

// EnvironmentTargetingOptionDetails
// Represents a targetable environment. This will be populated in the environment_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`.
type EnvironmentTargetingOptionDetails struct {
	Environment *EnvironmentTargetingOptionDetailsEnvironmentEnum `json:"environment,omitempty"`
}
