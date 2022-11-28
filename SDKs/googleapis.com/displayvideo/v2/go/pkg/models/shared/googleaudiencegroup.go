package shared

// GoogleAudienceGroup
// Details of Google audience group. All Google audience targeting settings are logically ‘OR’ of each other.
type GoogleAudienceGroup struct {
	Settings []GoogleAudienceTargetingSetting `json:"settings,omitempty"`
}
