package shared

type NewUserRequest struct {
	Email       *string `json:"email,omitempty"`
	EntityToken *string `json:"entityToken,omitempty"`
	Firstname   *string `json:"firstname,omitempty"`
	IsActive    *bool   `json:"isActive,omitempty"`
	Lastname    *string `json:"lastname,omitempty"`
	Phone       *string `json:"phone,omitempty"`
}
