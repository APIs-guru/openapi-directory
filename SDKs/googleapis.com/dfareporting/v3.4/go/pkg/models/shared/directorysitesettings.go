package shared

type DirectorySiteSettings struct {
	ActiveViewOptOut               *bool        `json:"activeViewOptOut"`
	DfpSettings                    *DfpSettings `json:"dfpSettings"`
	InstreamVideoPlacementAccepted *bool        `json:"instreamVideoPlacementAccepted"`
	InterstitialPlacementAccepted  *bool        `json:"interstitialPlacementAccepted"`
}
