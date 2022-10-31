package shared

type IdentitytoolkitRelyingpartyVerifyAssertionRequest struct {
	AutoCreate             *bool   `json:"autoCreate,omitempty"`
	DelegatedProjectNumber *string `json:"delegatedProjectNumber,omitempty"`
	IDToken                *string `json:"idToken,omitempty"`
	InstanceID             *string `json:"instanceId,omitempty"`
	PendingIDToken         *string `json:"pendingIdToken,omitempty"`
	PostBody               *string `json:"postBody,omitempty"`
	RequestURI             *string `json:"requestUri,omitempty"`
	ReturnIdpCredential    *bool   `json:"returnIdpCredential,omitempty"`
	ReturnRefreshToken     *bool   `json:"returnRefreshToken,omitempty"`
	ReturnSecureToken      *bool   `json:"returnSecureToken,omitempty"`
	SessionID              *string `json:"sessionId,omitempty"`
	TenantID               *string `json:"tenantId,omitempty"`
	TenantProjectNumber    *string `json:"tenantProjectNumber,omitempty"`
}
