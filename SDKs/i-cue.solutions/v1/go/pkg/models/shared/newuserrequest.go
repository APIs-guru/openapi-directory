package shared

type NewUserRequest struct {
	Email       *string `json:"email"`
	EntityToken *string `json:"entityToken"`
	Firstname   *string `json:"firstname"`
	IsActive    *bool   `json:"isActive"`
	Lastname    *string `json:"lastname"`
	Phone       *string `json:"phone"`
}
