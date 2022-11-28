package shared

// Image
// Raw bytes representing consent artifact content.
type Image struct {
	GcsURI   *string `json:"gcsUri,omitempty"`
	RawBytes *string `json:"rawBytes,omitempty"`
}
