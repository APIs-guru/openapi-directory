package shared

type VideoFormatsListResponse struct {
	Kind         *string       `json:"kind"`
	VideoFormats []VideoFormat `json:"videoFormats"`
}
