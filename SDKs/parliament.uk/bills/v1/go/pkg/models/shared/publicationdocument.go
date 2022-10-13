package shared

type PublicationDocument struct {
	ContentLength *int32  `json:"contentLength"`
	ContentType   *string `json:"contentType"`
	Filename      *string `json:"filename"`
	ID            *int32  `json:"id"`
}
