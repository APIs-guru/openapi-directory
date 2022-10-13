package shared

type IdentificationTokenGenerationRequest struct {
	Email     string  `json:"email"`
	FirstName *string `json:"firstName"`
	LastName  *string `json:"lastName"`
}
