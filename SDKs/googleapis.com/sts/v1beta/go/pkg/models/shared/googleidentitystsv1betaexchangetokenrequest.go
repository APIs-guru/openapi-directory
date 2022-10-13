package shared

type GoogleIdentityStsV1betaExchangeTokenRequest struct {
	Audience           *string `json:"audience"`
	GrantType          *string `json:"grantType"`
	Options            *string `json:"options"`
	RequestedTokenType *string `json:"requestedTokenType"`
	Scope              *string `json:"scope"`
	SubjectToken       *string `json:"subjectToken"`
	SubjectTokenType   *string `json:"subjectTokenType"`
}
