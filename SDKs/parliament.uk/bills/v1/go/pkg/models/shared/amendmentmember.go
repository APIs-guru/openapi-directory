package shared

type AmendmentMember struct {
	House       *HouseEnum `json:"house"`
	IsLead      *bool      `json:"isLead"`
	MemberFrom  *string    `json:"memberFrom"`
	MemberID    *int32     `json:"memberId"`
	MemberPage  *string    `json:"memberPage"`
	MemberPhoto *string    `json:"memberPhoto"`
	Name        *string    `json:"name"`
	Party       *string    `json:"party"`
	PartyColour *string    `json:"partyColour"`
	SortOrder   *int32     `json:"sortOrder"`
}
