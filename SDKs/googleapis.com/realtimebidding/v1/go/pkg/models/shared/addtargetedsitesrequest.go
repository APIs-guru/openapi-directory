package shared

type AddTargetedSitesRequestTargetingModeEnum string

const (
	AddTargetedSitesRequestTargetingModeEnumTargetingModeUnspecified AddTargetedSitesRequestTargetingModeEnum = "TARGETING_MODE_UNSPECIFIED"
	AddTargetedSitesRequestTargetingModeEnumInclusive                AddTargetedSitesRequestTargetingModeEnum = "INCLUSIVE"
	AddTargetedSitesRequestTargetingModeEnumExclusive                AddTargetedSitesRequestTargetingModeEnum = "EXCLUSIVE"
)

// AddTargetedSitesRequest
// A request to start targeting the provided sites in a specific pretargeting configuration. The pretargeting configuration itself specifies how these sites are targeted in PretargetingConfig.webTargeting.
type AddTargetedSitesRequest struct {
	Sites         []string                                  `json:"sites,omitempty"`
	TargetingMode *AddTargetedSitesRequestTargetingModeEnum `json:"targetingMode,omitempty"`
}
