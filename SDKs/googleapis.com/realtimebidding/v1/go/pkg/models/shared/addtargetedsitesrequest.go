package shared

type AddTargetedSitesRequestTargetingModeEnum string

const (
	AddTargetedSitesRequestTargetingModeEnumTargetingModeUnspecified AddTargetedSitesRequestTargetingModeEnum = "TARGETING_MODE_UNSPECIFIED"
	AddTargetedSitesRequestTargetingModeEnumInclusive                AddTargetedSitesRequestTargetingModeEnum = "INCLUSIVE"
	AddTargetedSitesRequestTargetingModeEnumExclusive                AddTargetedSitesRequestTargetingModeEnum = "EXCLUSIVE"
)

type AddTargetedSitesRequest struct {
	Sites         []string                                  `json:"sites"`
	TargetingMode *AddTargetedSitesRequestTargetingModeEnum `json:"targetingMode"`
}
