package operations

type PostEvidenceFilterRequest struct {
	Request string `request:"mediaType=application/json"`
}

type PostEvidenceFilterResponse struct {
	ContentType string
	StatusCode  int64
}
