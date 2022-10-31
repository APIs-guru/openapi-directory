package shared

type ActingUser struct {
	Email    *string `json:"email,omitempty"`
	ImageURL *string `json:"imageUrl,omitempty"`
}
