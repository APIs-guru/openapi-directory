package shared



type ListAvailableOrgPolicyConstraintsResponse struct {
    Constraints []Constraint `json:"constraints,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

