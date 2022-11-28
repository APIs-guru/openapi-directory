package shared

type NewUserRequestInput struct {
	Email       *string `json:"email,omitempty"`
	EntityToken *string `json:"entityToken,omitempty"`
	Firstname   *string `json:"firstname,omitempty"`
	Lastname    *string `json:"lastname,omitempty"`
	Phone       *string `json:"phone,omitempty"`
}
