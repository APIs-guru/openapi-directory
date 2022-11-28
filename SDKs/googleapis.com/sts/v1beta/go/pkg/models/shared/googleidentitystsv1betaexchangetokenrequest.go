package shared

// GoogleIdentityStsV1betaExchangeTokenRequest
// Request message for ExchangeToken.
type GoogleIdentityStsV1betaExchangeTokenRequest struct {
	Audience           *string `json:"audience,omitempty"`
	GrantType          *string `json:"grantType,omitempty"`
	Options            *string `json:"options,omitempty"`
	RequestedTokenType *string `json:"requestedTokenType,omitempty"`
	Scope              *string `json:"scope,omitempty"`
	SubjectToken       *string `json:"subjectToken,omitempty"`
	SubjectTokenType   *string `json:"subjectTokenType,omitempty"`
}
