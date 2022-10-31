package shared

type GoogleIdentityStsV1IntrospectTokenRequest struct {
	Token         *string `json:"token,omitempty"`
	TokenTypeHint *string `json:"tokenTypeHint,omitempty"`
}
