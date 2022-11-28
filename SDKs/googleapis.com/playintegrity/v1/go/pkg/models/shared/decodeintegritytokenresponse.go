package shared

// DecodeIntegrityTokenResponse
// Response containing the decoded integrity payload.
type DecodeIntegrityTokenResponse struct {
	TokenPayloadExternal *TokenPayloadExternal `json:"tokenPayloadExternal,omitempty"`
}
