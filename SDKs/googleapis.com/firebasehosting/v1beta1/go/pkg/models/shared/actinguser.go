package shared

// ActingUser
// Contains metadata about the user who performed an action, such as creating a release or finalizing a version.
type ActingUser struct {
	Email    *string `json:"email,omitempty"`
	ImageURL *string `json:"imageUrl,omitempty"`
}
