package shared

type IdentitytoolkitRelyingpartyVerifyCustomTokenRequest struct {
	DelegatedProjectNumber *string `json:"delegatedProjectNumber"`
	InstanceID             *string `json:"instanceId"`
	ReturnSecureToken      *bool   `json:"returnSecureToken"`
	Token                  *string `json:"token"`
}
