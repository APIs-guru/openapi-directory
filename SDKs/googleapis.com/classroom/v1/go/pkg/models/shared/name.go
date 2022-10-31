package shared



type Name struct {
    FamilyName *string `json:"familyName,omitempty"`
    FullName *string `json:"fullName,omitempty"`
    GivenName *string `json:"givenName,omitempty"`
    
}

