package shared

// IdentitytoolkitRelyingpartyDeleteAccountRequest
// Request to delete account.
type IdentitytoolkitRelyingpartyDeleteAccountRequest struct {
	DelegatedProjectNumber *string `json:"delegatedProjectNumber,omitempty"`
	IDToken                *string `json:"idToken,omitempty"`
	LocalID                *string `json:"localId,omitempty"`
}
