package shared




type AddTargetedSitesRequestTargetingModeEnum string

const (
    AddTargetedSitesRequestTargetingModeEnumTargetingModeUnspecified AddTargetedSitesRequestTargetingModeEnum = "TARGETING_MODE_UNSPECIFIED"
AddTargetedSitesRequestTargetingModeEnumInclusive AddTargetedSitesRequestTargetingModeEnum = "INCLUSIVE"
AddTargetedSitesRequestTargetingModeEnumExclusive AddTargetedSitesRequestTargetingModeEnum = "EXCLUSIVE"
)


type AddTargetedSitesRequest struct {
    Sites []string `json:"sites,omitempty"`
    TargetingMode *AddTargetedSitesRequestTargetingModeEnum `json:"targetingMode,omitempty"`
    
}

