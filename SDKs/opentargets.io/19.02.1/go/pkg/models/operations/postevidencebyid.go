package operations

type PostEvidenceByIDRequest struct {
	Request string `request:"mediaType=application/json"`
}

type PostEvidenceByIDResponse struct {
	ContentType string
	StatusCode  int64
}
