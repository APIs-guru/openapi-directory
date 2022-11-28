package shared

// VideoFormatsListResponse
// Video Format List Response
type VideoFormatsListResponse struct {
	Kind         *string       `json:"kind,omitempty"`
	VideoFormats []VideoFormat `json:"videoFormats,omitempty"`
}
