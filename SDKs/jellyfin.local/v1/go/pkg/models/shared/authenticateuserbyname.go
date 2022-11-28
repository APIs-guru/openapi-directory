package shared

// AuthenticateUserByName
// The authenticate user by name request body.
type AuthenticateUserByName struct {
	Password *string `json:"Password,omitempty"`
	Pw       *string `json:"Pw,omitempty"`
	Username *string `json:"Username,omitempty"`
}
