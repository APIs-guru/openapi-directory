package shared

// DirectorySiteSettings
// Directory Site Settings
type DirectorySiteSettings struct {
	ActiveViewOptOut               *bool        `json:"activeViewOptOut,omitempty"`
	DfpSettings                    *DfpSettings `json:"dfpSettings,omitempty"`
	InstreamVideoPlacementAccepted *bool        `json:"instreamVideoPlacementAccepted,omitempty"`
	InterstitialPlacementAccepted  *bool        `json:"interstitialPlacementAccepted,omitempty"`
}
