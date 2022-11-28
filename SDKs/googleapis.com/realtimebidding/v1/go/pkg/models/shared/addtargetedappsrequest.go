package shared

type AddTargetedAppsRequestTargetingModeEnum string

const (
	AddTargetedAppsRequestTargetingModeEnumTargetingModeUnspecified AddTargetedAppsRequestTargetingModeEnum = "TARGETING_MODE_UNSPECIFIED"
	AddTargetedAppsRequestTargetingModeEnumInclusive                AddTargetedAppsRequestTargetingModeEnum = "INCLUSIVE"
	AddTargetedAppsRequestTargetingModeEnumExclusive                AddTargetedAppsRequestTargetingModeEnum = "EXCLUSIVE"
)

// AddTargetedAppsRequest
// A request to start targeting the provided app IDs in a specific pretargeting configuration. The pretargeting configuration itself specifies how these apps are targeted. in PretargetingConfig.appTargeting.mobileAppTargeting.
type AddTargetedAppsRequest struct {
	AppIds        []string                                 `json:"appIds,omitempty"`
	TargetingMode *AddTargetedAppsRequestTargetingModeEnum `json:"targetingMode,omitempty"`
}
