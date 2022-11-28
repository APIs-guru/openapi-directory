package shared

// SettingsChange
// Information about settings changes.
type SettingsChange struct {
	RestrictionChanges []RestrictionChange `json:"restrictionChanges,omitempty"`
}
