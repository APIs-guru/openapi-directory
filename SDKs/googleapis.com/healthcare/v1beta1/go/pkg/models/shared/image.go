package shared

type Image struct {
	GcsURI   *string `json:"gcsUri"`
	RawBytes *string `json:"rawBytes"`
}
