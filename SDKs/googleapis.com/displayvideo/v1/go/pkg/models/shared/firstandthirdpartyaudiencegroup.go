package shared

// FirstAndThirdPartyAudienceGroup
// Details of first and third party audience group. All first and third party audience targeting settings are logically ‘OR’ of each other.
type FirstAndThirdPartyAudienceGroup struct {
	Settings []FirstAndThirdPartyAudienceTargetingSetting `json:"settings,omitempty"`
}
