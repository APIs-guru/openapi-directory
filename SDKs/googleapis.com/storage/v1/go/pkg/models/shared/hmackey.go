package shared

type HmacKey struct {
	Kind     *string          `json:"kind"`
	Metadata *HmacKeyMetadata `json:"metadata"`
	Secret   *string          `json:"secret"`
}
