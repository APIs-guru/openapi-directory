package shared



type IdentificationTokenGenerationRequest struct {
    Email string `json:"email"`
    FirstName *string `json:"firstName,omitempty"`
    LastName *string `json:"lastName,omitempty"`
    
}

