package shared

type AddTargetedAppsRequestTargetingModeEnum string

const (
	AddTargetedAppsRequestTargetingModeEnumTargetingModeUnspecified AddTargetedAppsRequestTargetingModeEnum = "TARGETING_MODE_UNSPECIFIED"
	AddTargetedAppsRequestTargetingModeEnumInclusive                AddTargetedAppsRequestTargetingModeEnum = "INCLUSIVE"
	AddTargetedAppsRequestTargetingModeEnumExclusive                AddTargetedAppsRequestTargetingModeEnum = "EXCLUSIVE"
)

type AddTargetedAppsRequest struct {
	AppIds        []string                                 `json:"appIds"`
	TargetingMode *AddTargetedAppsRequestTargetingModeEnum `json:"targetingMode"`
}
