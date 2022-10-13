package shared

type GoogleIdentityStsV1IntrospectTokenRequest struct {
	Token         *string `json:"token"`
	TokenTypeHint *string `json:"tokenTypeHint"`
}
