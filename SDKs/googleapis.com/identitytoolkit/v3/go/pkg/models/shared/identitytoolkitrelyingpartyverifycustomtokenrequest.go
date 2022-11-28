package shared

// IdentitytoolkitRelyingpartyVerifyCustomTokenRequest
// Request to verify a custom token
type IdentitytoolkitRelyingpartyVerifyCustomTokenRequest struct {
	DelegatedProjectNumber *string `json:"delegatedProjectNumber,omitempty"`
	InstanceID             *string `json:"instanceId,omitempty"`
	ReturnSecureToken      *bool   `json:"returnSecureToken,omitempty"`
	Token                  *string `json:"token,omitempty"`
}
