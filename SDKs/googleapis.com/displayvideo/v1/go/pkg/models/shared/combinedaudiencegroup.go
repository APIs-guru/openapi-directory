package shared

// CombinedAudienceGroup
// Details of combined audience group. All combined audience targeting settings are logically ‘OR’ of each other.
type CombinedAudienceGroup struct {
	Settings []CombinedAudienceTargetingSetting `json:"settings,omitempty"`
}
