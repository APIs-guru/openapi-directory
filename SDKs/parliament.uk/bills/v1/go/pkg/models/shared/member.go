package shared



type Member struct {
    House *HouseEnum `json:"house,omitempty"`
    MemberFrom *string `json:"memberFrom,omitempty"`
    MemberID *int32 `json:"memberId,omitempty"`
    MemberPage *string `json:"memberPage,omitempty"`
    MemberPhoto *string `json:"memberPhoto,omitempty"`
    Name *string `json:"name,omitempty"`
    Party *string `json:"party,omitempty"`
    PartyColour *string `json:"partyColour,omitempty"`
    
}

