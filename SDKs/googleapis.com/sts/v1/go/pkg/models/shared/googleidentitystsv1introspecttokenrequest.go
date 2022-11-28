package shared

// GoogleIdentityStsV1IntrospectTokenRequest
// Request message for IntrospectToken.
type GoogleIdentityStsV1IntrospectTokenRequest struct {
	Token         *string `json:"token,omitempty"`
	TokenTypeHint *string `json:"tokenTypeHint,omitempty"`
}
