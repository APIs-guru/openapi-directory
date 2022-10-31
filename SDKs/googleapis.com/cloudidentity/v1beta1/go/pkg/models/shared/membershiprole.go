package shared



type MembershipRole struct {
    ExpiryDetail *ExpiryDetail `json:"expiryDetail,omitempty"`
    Name *string `json:"name,omitempty"`
    RestrictionEvaluations *RestrictionEvaluations `json:"restrictionEvaluations,omitempty"`
    
}

