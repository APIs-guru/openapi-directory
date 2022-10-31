package shared

type VideoFormatsListResponse struct {
	Kind         *string       `json:"kind,omitempty"`
	VideoFormats []VideoFormat `json:"videoFormats,omitempty"`
}
