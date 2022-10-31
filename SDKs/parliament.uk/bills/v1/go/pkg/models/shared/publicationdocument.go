package shared

type PublicationDocument struct {
	ContentLength *int32  `json:"contentLength,omitempty"`
	ContentType   *string `json:"contentType,omitempty"`
	Filename      *string `json:"filename,omitempty"`
	ID            *int32  `json:"id,omitempty"`
}
