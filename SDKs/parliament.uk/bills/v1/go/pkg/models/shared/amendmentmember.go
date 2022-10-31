package shared



type AmendmentMember struct {
    House *HouseEnum `json:"house,omitempty"`
    IsLead *bool `json:"isLead,omitempty"`
    MemberFrom *string `json:"memberFrom,omitempty"`
    MemberID *int32 `json:"memberId,omitempty"`
    MemberPage *string `json:"memberPage,omitempty"`
    MemberPhoto *string `json:"memberPhoto,omitempty"`
    Name *string `json:"name,omitempty"`
    Party *string `json:"party,omitempty"`
    PartyColour *string `json:"partyColour,omitempty"`
    SortOrder *int32 `json:"sortOrder,omitempty"`
    
}

