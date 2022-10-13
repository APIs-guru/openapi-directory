package shared

type HeldAccount struct {
	AccountID *string `json:"accountId"`
	Email     *string `json:"email"`
	FirstName *string `json:"firstName"`
	HoldTime  *string `json:"holdTime"`
	LastName  *string `json:"lastName"`
}
