package shared

type SecuritySettings struct {
	MemberRestriction *MemberRestriction `json:"memberRestriction"`
	Name              *string            `json:"name"`
}
