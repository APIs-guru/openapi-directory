package shared

// SecuritySettingsInput
// The definition of security settings.
type SecuritySettingsInput struct {
	MemberRestriction *MemberRestriction `json:"memberRestriction,omitempty"`
}
