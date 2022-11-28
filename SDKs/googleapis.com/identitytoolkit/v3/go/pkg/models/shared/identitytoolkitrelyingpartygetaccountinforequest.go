package shared

// IdentitytoolkitRelyingpartyGetAccountInfoRequest
// Request to get the account information.
type IdentitytoolkitRelyingpartyGetAccountInfoRequest struct {
	DelegatedProjectNumber *string  `json:"delegatedProjectNumber,omitempty"`
	Email                  []string `json:"email,omitempty"`
	IDToken                *string  `json:"idToken,omitempty"`
	LocalID                []string `json:"localId,omitempty"`
	PhoneNumber            []string `json:"phoneNumber,omitempty"`
}
