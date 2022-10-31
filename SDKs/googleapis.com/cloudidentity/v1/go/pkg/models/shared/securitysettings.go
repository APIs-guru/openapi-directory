package shared

type SecuritySettings struct {
	MemberRestriction *MemberRestriction `json:"memberRestriction,omitempty"`
	Name              *string            `json:"name,omitempty"`
}
