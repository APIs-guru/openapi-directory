package shared

// Impersonation
// Information about an impersonation, where an admin acts on behalf of an end user. Information about the acting admin is not currently available.
type Impersonation struct {
	ImpersonatedUser *User `json:"impersonatedUser,omitempty"`
}
