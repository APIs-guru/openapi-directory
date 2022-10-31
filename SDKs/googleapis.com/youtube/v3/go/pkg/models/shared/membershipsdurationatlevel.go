package shared



type MembershipsDurationAtLevel struct {
    Level *string `json:"level,omitempty"`
    MemberSince *string `json:"memberSince,omitempty"`
    MemberTotalDurationMonths *int32 `json:"memberTotalDurationMonths,omitempty"`
    
}

