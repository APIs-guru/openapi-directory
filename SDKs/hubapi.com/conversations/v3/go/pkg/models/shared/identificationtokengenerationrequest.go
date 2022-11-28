package shared

// IdentificationTokenGenerationRequest
// Information used to generate a token
type IdentificationTokenGenerationRequest struct {
	Email     string  `json:"email"`
	FirstName *string `json:"firstName,omitempty"`
	LastName  *string `json:"lastName,omitempty"`
}
