package shared

type LearnerResponse struct {
	Email     *string               `json:"email,omitempty"`
	FirstName *string               `json:"firstName,omitempty"`
	ID        *string               `json:"id,omitempty"`
	LastName  *string               `json:"lastName,omitempty"`
	Offerings []OfferingProgressRow `json:"offerings,omitempty"`
	PersonID  *string               `json:"personId,omitempty"`
}
