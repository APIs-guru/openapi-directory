package shared

type IdentitytoolkitRelyingpartyVerifyAssertionRequest struct {
	AutoCreate             *bool   `json:"autoCreate"`
	DelegatedProjectNumber *string `json:"delegatedProjectNumber"`
	IDToken                *string `json:"idToken"`
	InstanceID             *string `json:"instanceId"`
	PendingIDToken         *string `json:"pendingIdToken"`
	PostBody               *string `json:"postBody"`
	RequestURI             *string `json:"requestUri"`
	ReturnIdpCredential    *bool   `json:"returnIdpCredential"`
	ReturnRefreshToken     *bool   `json:"returnRefreshToken"`
	ReturnSecureToken      *bool   `json:"returnSecureToken"`
	SessionID              *string `json:"sessionId"`
	TenantID               *string `json:"tenantId"`
	TenantProjectNumber    *string `json:"tenantProjectNumber"`
}
