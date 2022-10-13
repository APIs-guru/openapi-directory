package shared

type Member struct {
	House       *HouseEnum `json:"house"`
	MemberFrom  *string    `json:"memberFrom"`
	MemberID    *int32     `json:"memberId"`
	MemberPage  *string    `json:"memberPage"`
	MemberPhoto *string    `json:"memberPhoto"`
	Name        *string    `json:"name"`
	Party       *string    `json:"party"`
	PartyColour *string    `json:"partyColour"`
}
