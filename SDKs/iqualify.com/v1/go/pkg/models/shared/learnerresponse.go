package shared

type LearnerResponse struct {
	Email     *string               `json:"email"`
	FirstName *string               `json:"firstName"`
	ID        *string               `json:"id"`
	LastName  *string               `json:"lastName"`
	Offerings []OfferingProgressRow `json:"offerings"`
	PersonID  *string               `json:"personId"`
}
