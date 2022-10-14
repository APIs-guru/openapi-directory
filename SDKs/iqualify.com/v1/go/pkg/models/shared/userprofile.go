package shared

type UserProfile struct {
	DisplayName *string `json:"displayName,omitempty"`
	Mobile      *string `json:"mobile,omitempty"`
}
