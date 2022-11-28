package shared

type EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum string

const (
	EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentUnspecified     EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum = "ENVIRONMENT_UNSPECIFIED"
	EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentWebOptimized    EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum = "ENVIRONMENT_WEB_OPTIMIZED"
	EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentWebNotOptimized EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum = "ENVIRONMENT_WEB_NOT_OPTIMIZED"
	EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentApp             EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum = "ENVIRONMENT_APP"
)

// EnvironmentAssignedTargetingOptionDetails
// Assigned environment targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`.
type EnvironmentAssignedTargetingOptionDetails struct {
	Environment       *EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum `json:"environment,omitempty"`
	TargetingOptionID *string                                                   `json:"targetingOptionId,omitempty"`
}
