package shared

// UserInfo
// User's information.
type UserInfo struct {
	DisplayName *string `json:"displayName,omitempty"`
	Email       *string `json:"email,omitempty"`
}
