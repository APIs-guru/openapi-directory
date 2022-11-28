package shared

// HmacKey
// JSON template to produce a JSON-style HMAC Key resource for Create responses.
type HmacKey struct {
	Kind     *string          `json:"kind,omitempty"`
	Metadata *HmacKeyMetadata `json:"metadata,omitempty"`
	Secret   *string          `json:"secret,omitempty"`
}
